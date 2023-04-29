import {
  addDependenciesToPackageJson,
  extractLayoutDirectory,
  getPackageManagerCommand,
  logger,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { GenerateGeneratorSchema } from './schema';
import { getLibsDir, hasProjectOrFail } from '@almaclaine/nx';

export default async function (tree: Tree, { name }: GenerateGeneratorSchema) {
  hasProjectOrFail(tree, name);
  const libsDir = getLibsDir(tree);
  logger.info(`libsDir: ${libsDir}`);
  const projectRoot = `${libsDir}/${name}`;
  logger.info(`projectRoot: ${projectRoot}`);
  const installTask = addDependenciesToPackageJson(
    tree,
    {},
    {
      stepci: '2.6.6',
    }
  );

  logger.info('Installing stepci dependencies');
  await installTask();
  // addProjectConfiguration(tree, options.name, {
  //   root: projectRoot,
  //   projectType: 'library',
  //   sourceRoot: `${projectRoot}/src`,
  //   targets: {},
  // });
  // generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options);
  // await formatFiles(tree);
}

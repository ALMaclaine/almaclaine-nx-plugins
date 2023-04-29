import { logger, Tree } from '@nx/devkit';
import { GenerateGeneratorSchema } from './schema';
import { getAppsDir, hasApplicationOrFail } from '@almaclaine/nx';

export default async function (tree: Tree, { name }: GenerateGeneratorSchema) {
  hasApplicationOrFail(tree, name);
  const appsDir = getAppsDir(tree);
  logger.info(`appsDir: ${appsDir}`);
  const projectRoot = `${appsDir}/${name}`;
  logger.info(`projectRoot: ${projectRoot}`);

  // addProjectConfiguration(tree, options.name, {
  //   root: projectRoot,
  //   projectType: 'library',
  //   sourceRoot: `${projectRoot}/src`,
  //   targets: {},
  // });
  // generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options);
  // await formatFiles(tree);
}

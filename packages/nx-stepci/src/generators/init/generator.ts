import {
  formatFiles,
  generateFiles,
  logger,
  readProjectConfiguration,
  Tree,
  updateProjectConfiguration,
} from '@nx/devkit';
import { InitGeneratorSchema } from './schema';
import { getAppsDir, hasApplicationOrFail } from '@almaclaine/nx';
import * as path from 'path';

export default async function (tree: Tree, { name }: InitGeneratorSchema) {
  logger.info('Run stepci init generator');
  hasApplicationOrFail(tree, name);
  const appsDir = getAppsDir(tree);
  logger.info(`appsDir: ${appsDir}`);
  const projectRoot = `${appsDir}/${name}`;
  logger.info(`projectRoot: ${projectRoot}`);
  const projectConfig = readProjectConfiguration(tree, name);
  const { targets } = projectConfig;
  updateProjectConfiguration(tree, name, {
    ...projectConfig,
    targets: {
      ...targets,
      'stepci-run': {
        executor: '@almaclaine/nx-stepci:stepci-run',
        options: {},
      },
    },
  });
  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, {});
  await formatFiles(tree);
}

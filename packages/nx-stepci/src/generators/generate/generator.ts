import { logger, Tree } from '@nx/devkit';
import { GenerateGeneratorSchema } from './schema';
import { getAppsDir, hasApplicationOrFail } from '@almaclaine/nx';
import { promisify } from 'util';
import { exec } from 'child_process';
import { resolve } from 'path';
export const execa = promisify(exec);

export default async function (
  tree: Tree,
  { name, spec, workflow }: GenerateGeneratorSchema
) {
  logger.info('Run stepci generate generator');
  hasApplicationOrFail(tree, name);
  const appsDir = getAppsDir(tree);
  logger.info(`appsDir: ${appsDir}`);
  const projectRoot = `${appsDir}/${name}`;
  logger.info(`projectRoot: ${projectRoot}`);

  const workflowName = workflow || 'workflow';
  const path = resolve(projectRoot, `${workflowName}.yml`);

  try {
    logger.info(`Generate spec ${spec}`);
    await execa(`stepci generate ${spec} ${path}`);
  } catch (e) {
    if (e.stderr.includes('not found')) {
      logger.error('stepci not found, install it and ensure it is on the path');
      return;
    }
  }
}

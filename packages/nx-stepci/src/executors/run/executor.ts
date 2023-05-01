import type { ExecutorContext } from '@nx/devkit';
import { RunExecutorSchema } from './schema';
import { logger } from '@nx/devkit';
import { resolve } from 'path';
import { promisify } from 'util';
import { exec } from 'child_process';
export const execa = promisify(exec);
export default async function runExecutor(
  options: RunExecutorSchema,
  context: ExecutorContext
) {
  logger.info('Run stepci run executor');
  const workflow = options.workflow || 'workflow';
  const path = resolve(context.cwd, `${workflow}.yml`);
  try {
    logger.info(`Running workflow ${workflow}`);
    const { stdout, stderr } = await execa(`stepci run ${path}`);
    if (stdout) logger.info(stdout);
    if (stderr) logger.error(stderr);
  } catch (e) {
    if (e.stderr.includes('not found')) {
      logger.error('stepci not found, install it and ensure it is on the path');
      return;
    }
  }
  return {
    success: true,
  };
}

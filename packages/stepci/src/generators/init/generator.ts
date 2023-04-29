import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { InitGeneratorSchema } from './schema';

export default async function (tree: Tree, options: InitGeneratorSchema) {
  // setup stepci (install etc)
  // call generator to create stepci yml
  //
  //
  // const projectRoot = `libs/${options.name}`;
  // addProjectConfiguration(tree, options.name, {
  //   root: projectRoot,
  //   projectType: 'library',
  //   sourceRoot: `${projectRoot}/src`,
  //   targets: {},
  // });
  // generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options);
  // await formatFiles(tree);
}

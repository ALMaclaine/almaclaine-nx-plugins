import {
  extractLayoutDirectory,
  getPackageManagerCommand,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { GenerateGeneratorSchema } from './schema';
import { getAppsDir } from '@almaclaine/nx';

export default async function (tree: Tree, options: GenerateGeneratorSchema) {
  console.log(getPackageManagerCommand().run('test', ''));
  // console.log(getProjects(tree).has('canvas-client'));
  // console.log(getProjects(tree).has('stepci'));
  console.log(extractLayoutDirectory(tree.root));
  throw Error('awd');
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

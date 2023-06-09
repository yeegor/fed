#!/usr/bin/env node
import { Command } from 'commander';

import { createReactComponent } from './actions/react-component/create';
import { CreateOptions } from './actions/react-component/command-types';
import { createRematchModel } from './actions/rematch-model/create';

const packageJson = require('../package.json');

export const program = new Command();

program
  .name('fed')
  .description('Front End Developer CLI')
  .version(packageJson.version);

program
  .command('react-component')
  .alias('component')
  .description('Create a React component')
  .argument('<name>', 'Name of the component')
  .option('-c, --container', 'Create a container component')
  .action((name: string, flags: CreateOptions) => {
    createReactComponent(name, flags);
  });

program
  .command('rematch-model')
  .alias('model')
  .description('Create a Rematch model')
  .argument('<name>', 'Name of the model')
  .action((name: string) => {
    createRematchModel(name);
  });

program.parse();

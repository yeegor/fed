#!/usr/bin/env node
import { Command } from 'commander';

import { create } from './actions/create/create';
import { CreateOptions } from './actions/create/types';

const packageJson = require('../package.json');

const program = new Command();

program
  .name('fed')
  .description('Front End Developer CLI')
  .version(packageJson.version);

program
  .command('create')
  .alias('crc')
  .description('Create a React component')
  .argument('<name>', 'Name of the component')
  .option('-c, --container', 'Create a container component')
  .action((name: string, flags: CreateOptions, program: Command) => {
    create(name, flags, program);
  });

program.parse();

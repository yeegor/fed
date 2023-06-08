import fs from 'fs';
import path from 'path';
import { CreateOptions } from './types';
import { Command } from 'commander';
import { ComponentPiece, componentMap } from './component-map';

const create = (name: string, flags: CreateOptions, program: Command): void => {
  const targetDirectory = path.resolve(process.cwd(), name);

  // Create directory
  if (fs.existsSync(targetDirectory)) {
    return program.error(`Directory ${name} already exists`);
  }

  fs.mkdirSync(targetDirectory);

  // Determine things to generate in a directory
  const requiredComponents: ComponentPiece[] = [
    ComponentPiece.Component,
    ComponentPiece.Types,
    ComponentPiece.Index,
  ];

  if (flags.container) {
    requiredComponents.push(ComponentPiece.Container);
  }

  // Create files
  requiredComponents.forEach(component => {
    const fileName = componentMap[component].getFileName(name);
    const filePath = path.resolve(targetDirectory, fileName);

    const templatePath = path.resolve(
      __dirname,
      '../../templates/components/Example',
      componentMap[component].template
    );

    const templateContents = fs.readFileSync(templatePath, 'utf-8');
    const processedTemplateContents = templateContents
      .replace(/%Example%/g, name)
      .replace(/%MainPostfix%/g, flags.container ? 'container' : 'component');

    fs.writeFileSync(filePath, processedTemplateContents);
  });

  // TODO cleanup on error
};

export { create };

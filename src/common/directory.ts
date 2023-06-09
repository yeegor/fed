import path from 'path';
import fs from 'fs';
import { program } from '../cli';
import { Creatable } from '../types/common';

export const getTemplateSourceDirectory = (creatable: Creatable): string => {
  return path.resolve(__dirname, `../../templates/${creatable}`);
};

export const getTargetDirectory = (entityName: string): string => {
  return path.resolve(process.cwd(), entityName);
};

export const createDirectorySafely = (entityName: string): void => {
  const targetDirectory = getTargetDirectory(entityName);

  // Create directory
  if (fs.existsSync(targetDirectory)) {
    return program.error(`Directory ${targetDirectory} already exists`);
  }

  fs.mkdirSync(targetDirectory);
};

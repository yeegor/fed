import fs from 'fs';
import path from 'path';

import { Piece, Creatable, PieceMap } from '../types/common';
import { getTargetDirectory, getTemplateSourceDirectory } from './directory';

export const createFilesFromTemplate = (
  entityName: string,
  pieceMap: PieceMap,
  requiredPieces: Piece[],
  creatable: Creatable
): void => {
  const targetDirectory = getTargetDirectory(entityName);
  const templateDirectory = getTemplateSourceDirectory(creatable);

  requiredPieces.forEach(piece => {
    const pieceMeta = pieceMap[piece];
    if (!pieceMeta) {
      return;
    }

    const fileName = pieceMeta.getFileName(entityName);
    const filePath = path.resolve(targetDirectory, fileName);

    const templatePath = path.resolve(
      __dirname,
      templateDirectory,
      pieceMeta.template
    );

    const templateContents = fs.readFileSync(templatePath, 'utf-8');
    const processedTemplateContents = templateContents
      .replace(/%Example%/g, entityName)
      .replace(
        /%example%/g,
        entityName.toLowerCase()[0].concat(entityName.slice(1))
      )
      .replace(/%IMPORT_PATH_OF_REMATCH_ROOT%/g, '@/store')
      .replace(
        /%MainPostfix%/g,
        requiredPieces.includes(Piece.Container) ? 'container' : 'component'
      );

    if (fs.existsSync(filePath)) {
      const existingFileContents = fs.readFileSync(filePath, 'utf-8');
      const concatenatedFileContents = `${existingFileContents}\n${processedTemplateContents}`;

      fs.writeFileSync(filePath, concatenatedFileContents);
    } else {
      fs.writeFileSync(filePath, processedTemplateContents);
    }
  });
};

import { pieceMap } from './piece-map';
import { createFilesFromTemplate } from '../../common/create-file-from-template';
import { createDirectorySafely } from '../../common/directory';
import { Creatable, Piece } from '../../types/common';

const createRematchModel = (entityName: string): void => {
  // Attempt creating a directory
  createDirectorySafely(entityName);

  // Determine things to generate in a directory
  const requiredPieces: Piece[] = [Piece.Model, Piece.Types];

  // Create files
  createFilesFromTemplate(
    entityName,
    pieceMap,
    requiredPieces,
    Creatable.RematchModel
  );

  // TODO cleanup on error
};

export { createRematchModel };

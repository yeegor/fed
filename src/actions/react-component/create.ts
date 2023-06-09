import { CreateOptions } from './command-types';
import { pieceMap } from './piece-map';
import { createFilesFromTemplate } from '../../common/create-file-from-template';
import { createDirectorySafely } from '../../common/directory';
import { Piece, Creatable } from '../../types/common';

const createReactComponent = (
  entityName: string,
  flags: CreateOptions
): void => {
  // Attempt creating a directory
  createDirectorySafely(entityName);

  // Determine things to generate in a directory
  const requiredComponents: Piece[] = [
    Piece.Component,
    Piece.ComponentTypes,
    Piece.Index,
  ];

  if (flags.container) {
    requiredComponents.push(Piece.Container);
    requiredComponents.push(Piece.ContainerTypes);
  }

  // Create files
  createFilesFromTemplate(
    entityName,
    pieceMap,
    requiredComponents,
    Creatable.ReactComponent
  );

  // TODO cleanup on error
};

export { createReactComponent };

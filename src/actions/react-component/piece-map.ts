import { Piece, PieceMap } from '../../types/common';

export const pieceMap: PieceMap = {
  [Piece.Component]: {
    getFileName: (name: string) => `${name}.component.tsx`,
    template: 'Example.component.txt',
  },

  [Piece.Container]: {
    getFileName: (name: string) => `${name}.container.tsx`,
    template: 'Example.container.txt',
  },

  [Piece.Index]: {
    getFileName: () => 'index.ts',
    template: 'index.txt',
  },

  [Piece.ContainerTypes]: {
    getFileName: () => 'types.ts',
    template: 'types-container.txt',
  },

  [Piece.ComponentTypes]: {
    getFileName: () => 'types.ts',
    template: 'types-component.txt',
  },
};

import { Piece, PieceMap } from '../../types/common';

export const pieceMap: PieceMap = {
  [Piece.Model]: {
    getFileName: (name: string) => `${name}.model.ts`,
    template: 'model.txt',
  },

  [Piece.Types]: {
    getFileName: () => 'types.ts',
    template: 'types.txt',
  },
};

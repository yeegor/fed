export enum Creatable {
  ReactComponent = 'react-component',
  RematchModel = 'rematch-model',
}

export interface PieceMeta {
  template: string;
  getFileName: (name: string) => string;
}

export enum Piece {
  Component = 'component',
  Container = 'container',
  Index = 'index',
  Model = 'model',
  Types = 'types',
  ContainerTypes = 'container-types',
  ComponentTypes = 'component-types',
}

export type PieceMap = Partial<Record<Piece, PieceMeta>>;

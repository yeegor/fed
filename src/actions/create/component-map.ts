interface ComponentMeta {
  template: string;
  getFileName: (name: string) => string;
}

export enum ComponentPiece {
  Component = 'component',
  Container = 'container',
  Index = 'index',
  Types = 'types',
}

export const componentMap: Record<ComponentPiece, ComponentMeta> = {
  component: {
    getFileName: (name: string) => `${name}.component.tsx`,
    template: 'Example.component.txt',
  },

  container: {
    getFileName: (name: string) => `${name}.container.tsx`,
    template: 'Example.container.txt',
  },

  index: {
    getFileName: () => 'index.ts',
    template: 'index.txt',
  },

  types: {
    getFileName: () => 'types.ts',
    template: 'types.txt',
  },
};

export type TIfCore = typeof ifCore;

export const ifExists = <TVariable = unknown>(variable: TVariable): boolean =>
  !!variable;

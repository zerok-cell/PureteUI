import { FC } from 'react';

export type TMenuSelectorProps = {
  items: string[] | null;
};

export type TMenuSelector = FC<TMenuSelectorProps>;

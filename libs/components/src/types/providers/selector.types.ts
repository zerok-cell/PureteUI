import { Dispatch, FC, ProviderProps, SetStateAction } from 'react';

export type TSelectorProvider = FC<Partial<ProviderProps<TSelectorContext>>>;

export type TSelectorContext = {
  active: boolean;
  select:
    | {
        id: string | unknown;
        value: {
          text: string | undefined;
        };
      }
    | undefined;
  setSelect: Dispatch<SetStateAction<TSelectorContext['select']>> | undefined;
  setActivate: Dispatch<SetStateAction<TSelectorContext['active']>> | undefined;
};

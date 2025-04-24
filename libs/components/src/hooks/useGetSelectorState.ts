import { useContext } from 'react';
import { selectorContext } from '../providers/contexts';

export const useGetSelectorState = () => {
  return useContext(selectorContext);
};

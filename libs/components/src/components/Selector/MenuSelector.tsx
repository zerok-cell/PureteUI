import { TMenuSelector } from '../../types/selector/menuSelector.types';
import { menuStyle } from './menu.css';
import { useGetSelectorState } from '../../hooks/useGetSelectorState';

export const MenuSelector: TMenuSelector = ({ items }) => {
  const { active } = useGetSelectorState();

  return (
    <div className={`${menuStyle({ active })}`}>
      {items?.map((item) => (
        <p>{item}</p>
      ))}
    </div>
  );
};

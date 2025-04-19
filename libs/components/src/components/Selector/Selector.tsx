import { SelectorProvider } from '../../providers';
import { ButtonSelector } from './ButtonSelector';
import { MenuSelector } from './MenuSelector';

export function Selector() {
  return (
    <SelectorProvider>
      <ButtonSelector />
      <MenuSelector />
    </SelectorProvider>
  );
}

export default Selector;

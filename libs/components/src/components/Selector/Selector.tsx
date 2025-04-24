import { SelectorProvider } from '../../providers';
import { ButtonSelector } from './ButtonSelector';
import { MenuSelector } from './MenuSelector';
import { TSelectorProps } from '../../types/selector/selector.types';
import { FC } from 'react';
import { flexContainer } from '../../css';

/**
 * @description Custom React selector with very many customize via props
 * @param items String array
 * @param setValue Callback from hook useState for set current select value.
 * @param propsButton
 * @param [propsButton.arrow] Props for arrow in your selector, props extends from ComponentsProps<"svg">
 * @param [propsButton.text] Props for text in your selector, props extends from ComponentsProps<"p">
 * @constructor
 */
export const Selector: FC<TSelectorProps> = ({
  items,
  setValue,
  ...propsButton
}) => {
  return (
    <SelectorProvider>
      <div
        style={{
          height: 'auto',
          position: 'relative',
        }}
        className={`${flexContainer({
          direction: 'column',
          align: 'center',
          justify: 'end',
        })}`}
      >
        <ButtonSelector {...propsButton} />
        <MenuSelector items={items} />
      </div>
    </SelectorProvider>
  );
};

export default Selector;

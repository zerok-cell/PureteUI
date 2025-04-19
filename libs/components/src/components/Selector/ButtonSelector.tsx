import { Button } from '../Button/Button';
import { ArrowSelector } from './ArrowSelector';
import { flexContainer } from '../../css/variants/flex.css';
import { TButtonSelector } from '../../types/selector/buttonSelector.types';
import { arrowStyle } from './arrow.css';
import { pureteTheme } from '../../css';
import { useGetSelectorState } from '../../hooks/useGetSelectorState';

export const ButtonSelector: TButtonSelector = ({ arrow, text, button }) => {
  const { setActivate, active } = useGetSelectorState();

  return (
    setActivate && (
      <Button {...button} onClick={() => setActivate(!active)}>
        <div
          className={flexContainer({
            direction: 'row',
            justify: 'between',
          })}
        >
          <p
            style={{
              margin: 0,
            }}
            {...text}
          >
            Selector
          </p>
          <ArrowSelector
            fill={pureteTheme.colors.accent}
            className={arrowStyle({ active })}
            {...arrow}
          />
        </div>
      </Button>
    )
  );
};

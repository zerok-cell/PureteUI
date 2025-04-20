import { Button } from '../Button/Button';
import { ArrowSelector } from './ArrowSelector';
import { flexContainer } from '../../css/variants/flex.css';
import { TButtonSelector } from '../../types/selector/buttonSelector.types';
import { arrowStyle } from './arrow.css';
import { pureteTheme } from '../../css';
import { useGetSelectorState } from '../../hooks/useGetSelectorState';
import { useMergeFunction } from '../../hooks';

export const ButtonSelector: TButtonSelector = ({
  arrow,
  text,
  onClick,
  ...button
}) => {
  const { setActivate, active } = useGetSelectorState();
  const onClickLocal = useMergeFunction(
    () => setActivate(!active),
    [(event) => onClick?.(event)]
  );

  return (
    <Button
      style={{
        width: '100%',
      }}
      {...button}
      onClick={onClickLocal}
    >
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
        />
        <ArrowSelector
          fill={pureteTheme.colors.accent}
          className={arrowStyle({ active })}
          {...arrow}
        />
      </div>
    </Button>
  );
};

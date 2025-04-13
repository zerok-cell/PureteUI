import buttonStyle from './buttonStyle.css';
import { TButton } from '../types';
import { conditionReturn } from '@purete-ui/utils';
import { waveEffect } from '../css';
import { useState } from 'react';

export const Button: TButton = ({
  className,
  transitionFunctionVariant,
  transitionSpeedVariant,
  paddingCss,
  children,
  borderStyle,
  borderWidth,
  disabled,
  borderRadius,
  onClick,
  onMouseDown,
  ...props
}) => {
  const [waveState, setWaveState] = useState(false);
  const clickEvent = (e) => {
    setWaveState(true);
    onClick && onClick(e);
  };
  const onMouseDownEvent = (e) => {
    onMouseDown && onMouseDown(e);
    setWaveState(false);
  };
  console.log(waveState);
  return (
    <button
      onMouseDown={onMouseDownEvent}
      onMouseUp={clickEvent}
      // onClick={clickEvent}
      disabled={disabled}
      className={`${className} ${buttonStyle({
        transitionSpeedVariant,
        paddingCss,
        transitionFunctionVariant,
        disabled,
        borderWidth,
        borderStyle,
        borderRadius,
      })}`}
      {...props}
    >
      <span className={waveEffect({ click: waveState })}></span>

      <span>
        {conditionReturn({ variable: children, returnIfFalse: 'Button' })}
      </span>
    </button>
  );
};

export default Button;

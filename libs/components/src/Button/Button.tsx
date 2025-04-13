import buttonStyle from './buttonStyle.css';
import { TButton } from '../types';
import { conditionReturn } from '@purete-ui/utils';

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
  ...props
}) => {
  return (
    <button
      disabled
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
      {conditionReturn({ variable: children, returnIfFalse: 'Button' })}
    </button>
  );
};

export default Button;

import buttonStyle from './buttonStyle.css';
import { TButton } from '../../types';
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
      disabled={disabled}
      className={`${buttonStyle({
        transitionSpeedVariant,
        paddingCss,
        transitionFunctionVariant,
        borderWidth,
        borderStyle,
        borderRadius,
      })} ${className} `}
      {...props}
    >
      {conditionReturn({ variable: children, returnIfFalse: 'Button' })}
    </button>
  );
};

export default Button;

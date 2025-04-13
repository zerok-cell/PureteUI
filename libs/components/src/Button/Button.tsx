import buttonStyle from './buttonStyle.css';
import { TButton } from '../types';
import { conditionReturn } from '@purete-ui/utils';

export const Button: TButton = ({
  className,
  customize,
  children,
  disabled,
  ...props
}) => {
  return (
    <button
      disabled
      className={`${className} ${buttonStyle({
        ...customize,
        disabled,
      })}`}
      {...props}
    >
      {conditionReturn({ variable: children, returnIfFalse: 'Button' })}
    </button>
  );
};

export default Button;

import buttonStyle from './buttonStyle.css';
import { TButton } from '../types/button/buttonProps.types';
import { conditionReturn } from '@purete-ui/utils';

export const Button: TButton = ({ className, children, ...props }) => {
  return (
    <button className={`${className} ${buttonStyle({ ...props })}`} {...props}>
      {conditionReturn(children, 'Button')}
    </button>
  );
};

export default Button;

import buttonStyle from './buttonStyle.css';
import { TButton } from '../types/button/buttonProps.types';
import { pureteTheme } from '../css';
import { conditionReturn } from '@purete-ui/utils';

export const Button: TButton = ({ disabled, children, ...props }) => {
  console.log(pureteTheme.padding);

  return (
    <button disabled className={buttonStyle({ disabled, ...props })}>
      {conditionReturn(children, 'Button')}
    </button>
  );
};

export default Button;

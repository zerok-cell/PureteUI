//TODO Type

import buttonStyle from './buttonStyle.css';
import { TButton } from '../types/button/buttonProps.types';

export const Button: TButton = ({ children, ...props }) => {
  console.log(buttonStyle({}));
  return <button className={buttonStyle({ ...props })}>dwd{children}</button>;
};

export default Button;

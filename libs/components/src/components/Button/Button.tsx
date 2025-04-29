import buttonStyle from './buttonStyle.css';
import { TButton } from '../../types';
import { conditionReturn } from '@purete-ui/utils';

/**
 * Custom button with very many customize via props
 * @param className Class from css
 * @param [transitionFunctionVariant] Transition function from property transition,maybe `ease`,`easeIn`,`easeInOut`,`easeOut`
 * @param [transitionSpeedVariant] Speed animation for transition, maybe 1,2,3, 3 the fastest
 * @param [paddingCss] Property padding from css
 * @param [children] Children for button
 * @param [borderStyle] Style border, maybe - `solid`, `dashed` and other
 * @param [borderWidth] Width border
 * @param [disabled] Disabled props with button tag
 * @param borderRadius Border radius props, maybe xs,md,sm and other
 * @param props Other props for button
 * @constructor
 * @returns JSX.Element
 * @component
 * @group Component
 * @example
 * ```tsx
 * const YourComponent = ()=>{
 *   return (
 *   <Button borderStyle="dashed">Click</Button>
 *   )
 * }
 * ```
 */
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

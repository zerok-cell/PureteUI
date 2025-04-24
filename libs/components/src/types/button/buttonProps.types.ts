import { ComponentProps, FC } from 'react';
import { TButtonStyle } from '../../components/Button/buttonStyle.css';

/**
 * Props for the `Button` component.
 *
 * Combines styles from `buttonStyle.css` and standard HTML button props.
 *
 * @property transitionFunctionVariant - Defines the CSS transition timing function. Possible values: `'ease'`, `'easeIn'`, `'easeOut'`, `'easeInOut'`.
 * @property transitionSpeedVariant - Speed level of the transition animation. Typically a number where `1` is the slowest and `3` is the fastest.
 * @property paddingCss - Custom padding defined in the style utility.
 * @property borderStyle - Border style (e.g., `'solid'`, `'dashed'`, etc.).
 * @property borderWidth - Width of the border.
 * @property borderRadius - Border radius value. Can be `xs`, `sm`, `md`, etc.
 * @property className - Additional CSS classes.
 * @property children - React children nodes rendered inside the button.
 * @property disabled - Disables the button if set to `true`.
 */
export type TButtonProps = TButtonStyle & ComponentProps<'button'>;

export type TButton = FC<TButtonProps>;

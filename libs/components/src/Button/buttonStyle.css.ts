import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import {
  borderRadius,
  borderStyle,
  borderWidth,
  disabled,
  paddingCss,
  pureteTheme,
  transitionFunctionVariant,
  transitionSpeedVariant,
} from '../css';
import baseClick from '../css/click/base.css';

const buttonStyle = recipe({
  base: [
    baseClick(),
    {
      outline: 'none',
      borderColor: pureteTheme.colors.accent,
      color: pureteTheme.colors.accent,
    },
  ],
  variants: {
    borderRadius,
    transitionSpeedVariant,
    transitionFunctionVariant,
    paddingCss,
    borderWidth,
    borderStyle,
    disabled,
  },
  defaultVariants: {
    disabled: false,
    borderRadius: 'sm',
    borderStyle: 'solid',
    borderWidth: 'sm',
    paddingCss: 'sm',
    transitionSpeedVariant: 3,
    transitionFunctionVariant: 'ease',
  },
});

export type TButtonStyle = RecipeVariants<typeof buttonStyle>;
export default buttonStyle;

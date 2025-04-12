import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import {
  pureteTheme,
  transitionFunctionVariant,
  transitionSpeedVariant,
} from '../css';
import baseClick from '../css/click/base.css';
import { paddingCss } from '../css/variants/padding.css';

const buttonStyle = recipe({
  base: [
    baseClick(),
    {
      outline: 'none',
      border: `solid 2px ${pureteTheme.colors.accent}`,
      background: pureteTheme.colors.primary,
      color: pureteTheme.colors.accent,
      borderRadius: 6,
    },
  ],
  variants: {
    transitionSpeedVariant,
    transitionFunctionVariant,
    paddingCss,
    disabled: {
      true: {
        background: pureteTheme.colors.active,
        color: pureteTheme.colors.primary,
        border: `solid 2px ${pureteTheme.colors.primary}`,
        cursor: 'not-allowed',
      },
    },
  },
  defaultVariants: {
    paddingCss: 'sm',
    transitionSpeedVariant: 3,
    transitionFunctionVariant: 'ease',
  },
});

export type TButtonStyle = RecipeVariants<typeof buttonStyle>;
export default buttonStyle;

import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import {
  pureteTheme,
  transitionFunctionVariant,
  transitionSpeedVariant,
} from '../css';
import baseClick from '../css/click/base.css';

const buttonStyle = recipe({
  base: [
    baseClick(),
    {
      border: `solid 2px ${pureteTheme.colors.accent}`,
      background: pureteTheme.colors.primary,
      color: pureteTheme.colors.accent,
      borderRadius: 6,
      padding: `${pureteTheme.margin.sm} ${pureteTheme.margin.sm}`,
    },
  ],
  variants: { transitionSpeedVariant, transitionFunctionVariant },
});

export type TButtonStyle = RecipeVariants<typeof buttonStyle>;
export default buttonStyle;

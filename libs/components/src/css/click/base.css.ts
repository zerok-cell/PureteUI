import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { pureteTheme } from '../theme.css';

const baseClick = recipe({
  base: {
    background: pureteTheme.colors.primary,
    selectors: {
      '&:active': {
        background: pureteTheme.colors.active,
      },
    },
  },
});
export type TBaseClick = RecipeVariants<typeof baseClick>;
export default baseClick;

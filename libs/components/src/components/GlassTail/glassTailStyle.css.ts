import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { borderRadius, borderStyle, borderWidth, paddingCss } from '../../css';
import { createVar } from '@vanilla-extract/css';

export const borderOpacityVariable = createVar({
  syntax: '<number>',
  inherits: false,
  initialValue: '0.29',
});

export const glassTailStyleCss = recipe({
  base: {
    background: 'rgba(0, 0, 0, 0.16)',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(8.4px)',
    WebkitBackdropFilter: 'blur(8.4px)',
    borderColor: `rgba(0, 0, 0, ${borderOpacityVariable})`,
  },

  variants: {
    paddingCss,
    borderWidth,
    borderStyle,
    borderRadius,
  },

  defaultVariants: {
    paddingCss: 'sm',
    borderWidth: 'md',
    borderStyle: 'solid',
    borderRadius: 'xl',
  },
});
export type TGlassTailStyleCss = RecipeVariants<typeof glassTailStyleCss>;

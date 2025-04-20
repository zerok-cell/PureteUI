import { recipe } from '@vanilla-extract/recipes';
import {
  paddingCss,
  pureteTheme,
  scrollStyle,
  transitionFunctionVariant,
  transitionSpeedVariant,
} from '../../css';

export const menuStyle = recipe({
  base: [
    scrollStyle(),
    {
      position: 'absolute',
      maxHeight: '100px',
      overflowY: 'scroll',
      top: '100%',
      width: 'inherit',
      borderBottomLeftRadius: pureteTheme.roundedPx.sm,
      borderBottomRightRadius: pureteTheme.roundedPx.sm,
      color: pureteTheme.colors.accent,
      backgroundColor: pureteTheme.colors.primary,
      zIndex: '2',
    },
  ],
  variants: {
    paddingCss,
    active: {
      true: {
        padding: 0,
        maxHeight: '0px',
      },
      false: {
        maxHeight: '100px',
      },
    },
    transitionSpeedVariant,
    transitionFunctionVariant,
  },
  defaultVariants: {
    paddingCss: 'sm',
    transitionSpeedVariant: 3,
    transitionFunctionVariant: 'ease',
  },
});

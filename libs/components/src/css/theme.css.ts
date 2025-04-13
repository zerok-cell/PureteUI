import {
  createGlobalTheme,
  createGlobalThemeContract,
} from '@vanilla-extract/css';

import { TBreakpoints } from '@purete-ui/types';
import { generateContract, gradationValues } from '@purete-ui/utils';

const breakPoints: TBreakpoints = {
  xs: '0px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1400px',
};
const sizeBase = gradationValues(0, 5, 'px');
export type TSizeBase = typeof sizeBase;

/**
 * @description Contract theme for theme. If you want to create own theme from Vanilla Extract, use this contract.
 * @example
 * import { varsGlobalTheme } from '@zeroui/zeroui'
 * createGlobalTheme(":root",varsGlobalTheme,{
 *     colors: {
 *         primary: "#10110C",
 *         accent: "#FAFAFA",
 *         active: "#1E1E1E",
 *     },
 *     roundedPx: {
 *         sm: "12px",
 *         md: "26px",
 *         lg:"150px"
 *     }
 * })
 * @contract
 */

const pureteTheme = createGlobalThemeContract({
  colors: {
    primary: 'color-primary',
    accent: 'color-accent',
    active: 'color-active',
  },
  roundedPx: {
    ...generateContract(sizeBase, 'rounded'),
  },
  breakPoints: {
    ...generateContract(breakPoints, 'breakpoints'),
  },
  margin: {
    ...generateContract(sizeBase, 'margin'),
  },
  padding: {
    ...generateContract(sizeBase, 'padding'),
  },
  borderWidth: {
    ...generateContract(sizeBase, 'borderWidth'),
  },
});

/**
 * @description The library theme loader, call it, and it initializes the
 * default theme or pass it an object with your data.
 * @param contractValues
 * @see pureteTheme
 */

createGlobalTheme(':root', pureteTheme, {
  colors: {
    primary: '#10110C',
    accent: '#FAFAFA',
    active: '#1E1E1E',
  },
  roundedPx: sizeBase,
  breakPoints: breakPoints,
  margin: sizeBase,
  padding: sizeBase,
  borderWidth: sizeBase,
});

export { pureteTheme };

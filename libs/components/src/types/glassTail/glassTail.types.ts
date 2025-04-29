import { TGlassTailStyleCss } from '../../components/GlassTail/glassTailStyle.css';
import { ComponentProps, CSSProperties, FC } from 'react';

export type TGlassTailProps = {
  borderOpacity: string;
} & TGlassTailStyleCss &
  ComponentProps<'div'> &
  Partial<Pick<CSSProperties, 'width' | 'height' | 'borderColor'>>;
export type TGlassTail = FC<TGlassTailProps>;

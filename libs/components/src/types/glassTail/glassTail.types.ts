import { TGlassTailStyleCss } from '../../components/GlassTail/glassTailStyle.css';
import { ComponentProps, CSSProperties, FC, ReactNode } from 'react';

export type TGlassTailProps = {
  children: ReactNode;
  borderOpacity: string;
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
  borderColor?: CSSProperties['borderColor'];
} & TGlassTailStyleCss &
  ComponentProps<'div'>;
export type TGlassTail = FC<TGlassTailProps>;

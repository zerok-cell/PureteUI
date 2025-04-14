import { ComponentProps, CSSProperties, FC } from 'react';
import { TSkeletonBlockStyleCss } from '../../components/Skeleton/SkeletonBlock/skeletonBlockStyle.css';

type TBackgroundColor = CSSProperties['backgroundColor'];
export type TSkeletonBlockProps = ComponentProps<'div'> &
  TSkeletonBlockStyleCss &
  Required<Pick<CSSProperties, 'width' | 'height'>> & {
  fill?: boolean;
  glareColor?: TBackgroundColor;
  containerColor?: TBackgroundColor;
};

export type TSkeletonBlock = FC<TSkeletonBlockProps>;

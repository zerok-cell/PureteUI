import { slideTextStyle } from './slideText.css';
import { TSlideText } from '../types/slidetext/slideText.types';

export const SlideText: TSlideText = ({
  transitionSpeedVariant,
  transitionFunctionVariant,
  children,
  ...props
}) => {
  return (
    <h1
      className={slideTextStyle({
        transitionFunctionVariant,
        transitionSpeedVariant,
      })}
      {...props}
    >
      {children}
    </h1>
  );
};

export default SlideText;

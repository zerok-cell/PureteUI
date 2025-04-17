import {
  cloneElement,
  ComponentProps,
  FC,
  forwardRef,
  isValidElement,
  useEffect,
  useState,
} from 'react';
import { rainbowBorderStyle, TRainbowBorderStyle } from './rainbowBorder.css';

type TRainbowBorderProps = {} & ComponentProps<'div'> & TRainbowBorderStyle;

type TRainbowBorder = FC<TRainbowBorderProps>;

export const RainbowBorder: TRainbowBorder = forwardRef(
  ({ children, className, staticAnimation, style, ...props }) => {
    const [component, setComponent] =
      useState<ReturnType<typeof cloneElement>>();
    useEffect(() => {
      if (isValidElement(children)) {
        setComponent(
          cloneElement(children, {
            style: {
              border: 'none',
            },
          })
        );
      }
    }, [children]);

    return (
      <div
        className={`${rainbowBorderStyle({
          staticAnimation,
        })} ${className} `}
      >
        {component}
      </div>
    );
  }
);

export default RainbowBorder;

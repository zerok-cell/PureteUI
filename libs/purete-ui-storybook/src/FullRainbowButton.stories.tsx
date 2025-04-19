import type { Meta, StoryObj } from '@storybook/react';
import { FullRainbowButton, paddingCss } from '@purete-ui/components';
import type { TypeWithDeepControls } from 'storybook-addon-deep-controls';

const component = FullRainbowButton;
const customProperties = 'Custom properties';
const standardProperties = 'Standard properties';
const meta: TypeWithDeepControls<Meta<typeof component>> = {
  args: {
    disabled: false,
    borderRadius: 'sm',
    borderWidth: 'sm',
    paddingCss: 'sm',
    transitionSpeedVariant: 3,
    transitionFunctionVariant: 'ease',
  },

  argTypes: {
    children: { control: 'text', description: 'Button content' },
    paddingCss: {
      control: 'select',
      options: Object.keys(paddingCss),
      description: 'Button padding size',
      table: { category: customProperties },
    },

    disabled: {
      control: 'boolean',
      description: 'Disable the button',
      table: { category: standardProperties },
    },
    gradient: {
      control: 'object',
      description: `Градиентные свойства рамки. Объект включает:
- borderSize: размер рамки (напр. '2px')
- gradientBlur: степень размытия градиента (напр. '2px')
- rainbowGradient: CSS-градиент (напр. linear-gradient(...))`,
      table: { category: customProperties },
    },
    flex: {
      control: 'object',
      description: `Флекс свойства обёртки:
- justify: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
- align: 'start' | 'center' | 'end' | 'stretch' | 'baseline'
- direction: 'row' | 'column' | 'rowReverse' | 'columnReverse'
- wrap: 'noWrap' | 'wrap' | 'wrapReverse'`,
      table: { category: customProperties },
    },

    rainbowStyle: {
      control: 'object',
      description: `Настройки анимации и переходов рамки:
- staticAnimation: true | false — остановка анимации
- transitionFunctionVariant: тип функции перехода
- transitionSpeedVariant: скорость перехода (число от 1 до 5)`,
      table: { category: customProperties },
    },

    style: {
      control: 'object',
      description: 'Style from button',
      table: { category: customProperties },
    },
  },

  component: component,
  title: 'FullRainbowButton',
};
export default meta;
type Story = StoryObj<typeof component>;

export const Primary: Story = {};

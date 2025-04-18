import type { Meta, StoryObj } from '@storybook/react';
import { Button, RainbowBorder } from '@purete-ui/components';
import type { TypeWithDeepControls } from 'storybook-addon-deep-controls';

const component = RainbowBorder;
const customProperties = 'Custom properties';
const meta: TypeWithDeepControls<Meta<typeof component>> = {
  args: {
    flex: {},
  },

  argTypes: {
    gradient: {
      control: 'object',
      description: `Градиентные свойства рамки. Объект включает:
- borderSize: размер рамки (напр. '2px')
- gradientHeight: высота градиента (напр. '50%')
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
    children: {
      control: false,
      description: 'Вложенный элемент, к которому применяется обводка',
      table: { category: 'Base' },
    },
    className: {
      control: 'text',
      description: 'Дополнительные CSS классы',
      table: { category: 'Base' },
    },
    style: {
      control: 'object',
      description: 'Inline-стили для внешней обёртки',
      table: { category: 'Base' },
    },
  },

  component: component,
  title: 'RainbowBorder',
};
export default meta;
type Story = StoryObj<typeof component>;

export const Primary: Story = {
  args: {
    children: <Button borderStyle={'none'}>Rainbow Button</Button>,

    gradient: {
      borderSize: '1px',
      gradientBlur: '2px',
      gradientHeight: '30%',
    },
    className: 'Rainbow Button',

    flex: {
      justify: 'center',
      direction: 'row',
      align: 'end',
    },
  },
};

import type { Meta, StoryObj } from '@storybook/react';
import {
  Button,
  RainbowBorder,
  transitionFunctionVariant,
  transitionSpeedVariant,
} from '@purete-ui/components';
import type { TypeWithDeepControls } from 'storybook-addon-deep-controls';

const component = RainbowBorder;
const customProperties = 'Custom properties';
const meta: TypeWithDeepControls<Meta<typeof component>> = {
  args: {},

  argTypes: {
    staticAnimation: {
      control: { type: 'boolean' },
      description: 'Отключает анимацию градиента, делая его статичным',
      table: { category: customProperties },
    },
    justify: {
      control: { type: 'select' },
      options: ['start', 'center', 'end', 'between', 'around', 'evenly'],
      description:
        'Горизонтальное выравнивание вложенного контента внутри рамки',
      table: { category: customProperties },
    },
    align: {
      control: { type: 'select' },
      options: ['start', 'center', 'end', 'stretch', 'baseline'],
      description: 'Вертикальное выравнивание вложенного контента внутри рамки',
      table: { category: customProperties },
    },
    direction: {
      control: { type: 'select' },
      options: ['row', 'column', 'rowReverse', 'columnReverse'],
      description: 'Направление размещения вложенного контента (основа флекса)',
      table: { category: customProperties },
    },
    wrap: {
      control: { type: 'select' },
      options: ['noWrap', 'wrap', 'wrapReverse'],
      description: 'Управление переносом строк для контента внутри рамки',
      table: { category: customProperties },
    },
    borderSize: {
      control: { type: 'text' },
      description: 'Толщина градиентной рамки (например, 2px)',
      table: { category: customProperties },
    },
    gradientBlur: {
      control: { type: 'text' },
      description: 'Значение размытия градиента (например, 4px)',
      table: { category: customProperties },
    },
    gradientHeight: {
      control: { type: 'text' },
      description: 'Высота псевдоэлемента с градиентом (например, 100%)',
      table: { category: customProperties },
    },
    transitionSpeedVariant: {
      control: 'select',
      options: Object.keys(transitionSpeedVariant),
      description: 'Скорость анимации градиента (напр. fast, normal, slow)',
      table: { category: customProperties },
    },
    transitionFunctionVariant: {
      control: 'select',
      options: Object.keys(transitionFunctionVariant),
      description:
        'Функция временной кривой для анимации (ease, linear и т.д.)',
      table: { category: customProperties },
    },
  },

  component: component,
  title: 'RainbowBorder',
};
export default meta;
type Story = StoryObj<typeof component>;

export const Primary: Story = {
  args: {
    children: <Button borderStyle={'none'}>dwd</Button>,
    align: 'center',
    borderSize: '1px',
    gradientBlur: '2px\n',
    gradientHeight: '100%',
    justify: 'center',
    direction: 'row',
    className: 'dwdwdw',
  },
};

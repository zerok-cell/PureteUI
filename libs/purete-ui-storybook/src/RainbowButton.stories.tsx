import type { Meta, StoryObj } from '@storybook/react';
import {
  borderRadius,
  borderStyle,
  borderWidth,
  paddingCss,
  RainbowButton,
} from '@purete-ui/components';
import type { TypeWithDeepControls } from 'storybook-addon-deep-controls';

const component = RainbowButton;
const customProperties = 'Custom properties';
const standardProperties = 'Standard properties';
const meta: TypeWithDeepControls<Meta<typeof component>> = {
  args: {
    disabled: false,
    borderRadius: 'sm',
    borderStyle: 'solid',
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

    gradientBlur: {
      control: 'text',
      description: 'Gradient blur, with px',
      table: { category: customProperties },
    },
    rainbowGradientColor: {
      control: 'text',
      description: 'Gradient blur, with px',
      table: { category: customProperties },
    },
    gradientHeight: {
      control: 'text',
      description: 'Gradient height',
      table: { category: customProperties },
    },

    disabled: {
      control: 'boolean',
      description: 'Disable the button',
      table: { category: standardProperties },
    },
    borderWidth: {
      control: 'select',
      options: Object.keys(borderWidth),
      description: 'Border width size ',
      table: { category: customProperties },
    },
    borderStyle: {
      control: 'select',
      options: Object.keys(borderStyle),
      description: 'Border width size ',
      table: { category: customProperties },
    },
    borderRadius: {
      control: 'select',
      options: Object.keys(borderRadius),
      description: 'Border radius property',
      table: { category: customProperties },
    },

    style: {
      control: 'object',
      description: 'Style from button',
      table: { category: customProperties },
    },
  },

  component: component,
  title: 'RainbowButton',
};
export default meta;
type Story = StoryObj<typeof component>;

export const Primary: Story = {};

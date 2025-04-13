import type { Meta, StoryObj } from '@storybook/react';
import {
  borderRadius,
  borderStyle,
  borderWidth,
  Button,
  paddingCss,
  transitionFunctionVariant,
  transitionSpeedVariant,
} from '@purete-ui/components';
import type { TypeWithDeepControls } from 'storybook-addon-deep-controls';

const component = Button;
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
      table: { subcategory: customProperties },
    },

    transitionSpeedVariant: {
      control: 'select',
      options: Object.keys(transitionSpeedVariant),
      description: 'Transition speed for animations',
      table: { subcategory: customProperties },
    },
    transitionFunctionVariant: {
      control: 'select',
      options: Object.keys(transitionFunctionVariant),
      description: 'Timing function for animations',
      table: { subcategory: customProperties },
    },

    disabled: {
      control: 'boolean',
      description: 'Disable the button',
      table: { subcategory: standardProperties },
    },
    borderWidth: {
      control: 'select',
      options: Object.keys(borderWidth),
      description: 'Border width size ',
      table: { subcategory: customProperties },
    },
    borderStyle: {
      control: 'select',
      options: Object.keys(borderStyle),
      description: 'Border width size ',
      table: { subcategory: customProperties },
    },
    borderRadius: {
      control: 'select',
      options: Object.keys(borderRadius),
      description: 'Border radius property',
      table: { subcategory: customProperties },
    },

    style: {
      control: 'object',
      description: 'Style from button',
      table: { subcategory: customProperties },
    },
  },

  component: component,
  title: 'Button',
};
export default meta;
type Story = StoryObj<typeof component>;

export const Primary: Story = {};

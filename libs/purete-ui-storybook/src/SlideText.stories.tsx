import type { Meta, StoryObj } from '@storybook/react';
import {
  SlideText,
  transitionFunctionVariant,
  transitionSpeedVariant,
} from '@purete-ui/components';
import type { TypeWithDeepControls } from 'storybook-addon-deep-controls';

const component = SlideText;
const customProperties = 'Custom properties';
const standardProperties = 'Standard properties';
const meta: TypeWithDeepControls<Meta<typeof component>> = {
  args: {},

  argTypes: {
    children: { control: 'text', description: 'Button content' },

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

    style: {
      control: 'object',
      description: 'Style from button',
      table: { subcategory: standardProperties },
    },
  },

  component: component,
  title: 'SlideText',
};
export default meta;
type Story = StoryObj<typeof component>;

export const Primary: Story = {};

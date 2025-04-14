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
    startColorCustom: {
      control: 'color',
      description: 'Start color from gradient color',
      table: { category: customProperties },
    },
    endColorCustom: {
      control: 'color',
      description: 'End color from gradient color',
      table: { category: customProperties },
    },
    transitionSpeedVariant: {
      control: 'select',
      options: Object.keys(transitionSpeedVariant),
      description: 'Transition speed for animations',
      table: { category: customProperties },
    },

    transitionFunctionVariant: {
      control: 'select',
      options: Object.keys(transitionFunctionVariant),
      description: 'Timing function for animations',
      table: { category: customProperties },
    },
    reverse: {
      control: 'boolean',
      description: 'Reverse color',
      table: { category: customProperties },
    },
    style: {
      control: 'object',
      description: 'Style from button',
      table: { category: standardProperties },
    },
  },

  component: component,
  title: 'SlideText',
};
export default meta;
type Story = StoryObj<typeof component>;

export const Primary: Story = {};

import type { Meta, StoryObj } from '@storybook/react';
import {
  borderRadius,
  paddingCss,
  SkeletonBlock,
  transitionFunctionVariant,
  transitionSpeedVariant,
} from '@purete-ui/components';
import type { TypeWithDeepControls } from 'storybook-addon-deep-controls';

const component = SkeletonBlock;
const customProperties = 'Custom properties';
const standardProperties = 'Standard properties';
const meta: TypeWithDeepControls<Meta<typeof component>> = {
  args: {},
  argTypes: {
    transitionSpeedVariant: {
      control: 'select',
      options: Object.keys(transitionSpeedVariant),
      description: 'Transition speed for animations',
      table: { category: customProperties },
    },
    paddingCss: {
      control: 'select',
      options: Object.keys(paddingCss),
      description: 'Button padding size',
      table: { category: customProperties },
    },
    borderRadius: {
      control: 'select',
      options: Object.keys(borderRadius),
      description: 'Border radius property',
      table: { category: customProperties },
    },
    transitionFunctionVariant: {
      control: 'select',
      options: Object.keys(transitionFunctionVariant),
      description: 'Timing function for animations',
      table: { category: customProperties },
    },
    style: {
      control: 'object',
      description: 'Style from button',
      table: { category: standardProperties },
    },
    fill: {
      control: 'boolean',
      description: 'Whether to fill the parent space or not',
      table: { category: customProperties },
    },
    width: {
      control: 'text',
      description: 'Width from skeleton',
      table: { category: customProperties },
    },
    glareColor: {
      control: 'color',
      description: 'Glare color',
      table: { category: customProperties },
    },
    containerColor: {
      control: 'color',
      description: 'Container color',
      table: { category: customProperties },
    },
    height: {
      control: 'text',
      description: 'Width from skeleton',
      table: { category: customProperties },
    },
  },

  component: component,
  title: 'SkeletonBlock',
};
export default meta;
type Story = StoryObj<typeof component>;

export const Primary: Story = {};

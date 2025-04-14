import type { Meta, StoryObj } from '@storybook/react';
import {
  borderRadius,
  borderStyle,
  borderWidth,
  GlassTail,
  paddingCss,
} from '@purete-ui/components';
import type { TypeWithDeepControls } from 'storybook-addon-deep-controls';

const component = GlassTail;
const customProperties = 'Custom properties';
const standardProperties = 'Standard properties';
const meta: TypeWithDeepControls<Meta<typeof component>> = {
  argTypes: {
    children: {
      control: 'text',
      description: 'Button content',
      table: { category: standardProperties },
    },
    paddingCss: {
      control: 'select',
      options: Object.keys(paddingCss),
      description: 'Button padding size',
      table: { category: customProperties },
    },

    borderWidth: {
      control: 'select',
      options: Object.keys(borderWidth),
      description: 'Border width size ',
      table: { category: customProperties },
    },
    width: {
      control: 'number',
      description: 'Width glass',
      table: { category: customProperties },
    },
    height: {
      control: 'number',
      description: 'height glass ',
      table: { category: customProperties },
    },
    borderOpacity: {
      control: 'number',
      description: 'Border opacity ',
      table: { category: customProperties },
    },
    borderStyle: {
      control: 'select',
      options: Object.keys(borderStyle),
      description: 'Border width size ',
      table: { category: customProperties },
    },
    borderColor: {
      control: 'color',
      description: 'Border color',
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
      table: { category: standardProperties },
    },
  },

  component: component,
  title: 'GlassTail',
};
export default meta;
type Story = StoryObj<typeof component>;

export const Primary: Story = {
  args: {
    width: 200,
    height: 200,
    paddingCss: "xs",
    borderRadius: "xxl",
    borderWidth: "sm"
  }
};

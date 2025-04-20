import type { Meta, StoryObj } from '@storybook/react';
import type { TypeWithDeepControls } from 'storybook-addon-deep-controls';
import { Selector } from '@purete-ui/components';

const component = Selector;
const customProperties = 'Custom properties';
const standardProperties = 'Standard properties';

const selectorArgType: typeof meta.argTypes = {
  text: {
    description: 'Props for text the inside button (тег <p>)',
    control: 'object',
  },
  arrow: {
    description: 'Style and attributes for icon-arrow (SVG)',
    control: 'object',
  },
  button: {
    description: 'Props from button',
    control: 'object',
  },
};

const meta: TypeWithDeepControls<Meta<typeof component>> = {
  args: {},

  argTypes: {
    ...selectorArgType,
  },

  component: component,
  title: 'Selector',
};
export default meta;
type Story = StoryObj<typeof component>;

export const Primary: Story = {
  args: {
    text: {
      children: 'Selector',
    },

    items: ["dawd", "dwdw", 12312]
  },
};

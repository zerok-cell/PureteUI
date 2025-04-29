import type { Meta, StoryObj } from '@storybook/react';
import type { TypeWithDeepControls } from 'storybook-addon-deep-controls';
import { Selector } from '@purete-ui/components';

// const customProperties = 'Custom properties';
// const standardProperties = 'Standard properties';

const selectorArgType: typeof meta.argTypes = {
  text: {
    description: 'Props for text the inside button (тег <p>)',
    control: 'object',
  },
  arrow: {
    description: 'Style and attributes for icon-arrow (SVG)',
    control: 'object',
  },
};

const meta: TypeWithDeepControls<Meta<typeof Selector>> = {
  args: {},

  argTypes: {
    ...selectorArgType,
  },

  component: Selector,
  title: 'Selector',
};
export default meta;
type Story = StoryObj<typeof Selector>;

export const Primary: Story = {
  args: {
    text: {
      children: 'Selector',
    },

    items: ['dawd', 'dwdw'],
  },
};

import type { Meta, StoryObj } from '@storybook/react';
import type { TypeWithDeepControls } from 'storybook-addon-deep-controls';

const component = () => <p>Your Components</p>;
const customProperties = 'Custom properties';
const standardProperties = 'Standard properties';
const meta: TypeWithDeepControls<Meta<typeof component>> = {
  args: {},

  argTypes: {},

  component: component,
  title: 'Clear',
};
export default meta;
type Story = StoryObj<typeof component>;

export const Primary: Story = {};

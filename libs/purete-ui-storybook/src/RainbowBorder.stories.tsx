import type { Meta, StoryObj } from '@storybook/react';
import { Button, RainbowBorder } from '@purete-ui/components';
import type { TypeWithDeepControls } from 'storybook-addon-deep-controls';

const component = RainbowBorder;
const customProperties = 'Custom properties';
const standardProperties = 'Standard properties';
const meta: TypeWithDeepControls<Meta<typeof component>> = {
  args: {},

  argTypes: {
    staticAnimation: {
      control: { type: 'boolean' },
    },
  },

  component: component,
  title: 'RainbowBorder',
};
export default meta;
type Story = StoryObj<typeof component>;

export const Primary: Story = () => {
  return (
    <RainbowBorder>
      <Button>dwd</Button>
    </RainbowBorder>
  );
};

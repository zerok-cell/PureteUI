import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@purete-ui/components';

const component = Button;

const meta: Meta<typeof component> = {
  argTypes: {
    children: { control: 'text', description: 'Button content' },
    transitionSpeedVariant: {
      control: 'select',
      options: ['1', '2', '3'], // Возможные значения из styleVariants
      description: 'Speed of the transition',
    },
    transitionFunctionVariant: {
      control: 'select',
      options: ['ease', 'easeIn', 'easeOut', 'easeInOut'], // Возможные значения из styleVariants
      description: 'Timing function of the transition',
    },
  },
  component: component,
  title: 'Button',
};
export default meta;
type Story = StoryObj<typeof component>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  // play: async ({ canvasElement }) => {
  //   const canvas = within(canvasElement);
  //   expect(canvas.getByText(/Welcome to Button!/gi)).toBeTruthy();
  // },
};

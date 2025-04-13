import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@purete-ui/components';

const component = Button;

const meta: Meta<typeof component> = {
  args: {
    customize: {
      paddingCss: 'string',
      transitionSpeedVariant: '1 | 2 | 3 | undefined',
      transitionFunctionVariant: 'string',
    },
  },
  argTypes: {
    'children': { control: 'text', description: 'Button content' },
    'customize': {
      control: 'object',
      description: 'Customize the button style',
      table: { subcategory: 'dwd' },
    },
    'customize.paddingCss': {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Button padding size',
    },
    // 'customize.transitionSpeedVariant': {
    //   control: 'select',
    //   options: ['1', '2', '3'],
    //   description: 'Transition speed for animations',
    // },
    // 'customize.transitionFunctionVariant': {
    //   control: 'select',
    //   options: ['ease', 'easeIn', 'easeOut', 'easeInOut'],
    //   description: 'Timing function for animations',
    // },
    'disabled': {
      control: 'boolean',
      description: 'Disable the button',
    },
  },
  component: component,
  title: 'Button',
};
export default meta;
type Story = StoryObj<typeof component>;

export const Primary = {
  args: {
    customize: {
      transitionSpeedVariant: '3',
      transitionFunctionVariant: 'ease',
      paddingCss: 'sm',
    },

    disabled: false,
    children: 'Button',
  },
};

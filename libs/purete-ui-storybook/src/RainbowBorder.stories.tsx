import type { Meta, StoryObj } from '@storybook/react';
import {
  Button,
  RainbowBorder,
  transitionFunctionVariant,
  transitionSpeedVariant,
} from '@purete-ui/components';
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
    justify: {
      control: {
        type: 'select',
      },
      options: ['start', 'center', 'end', 'between', 'around', 'evenly'],
    },
    align: {
      control: {
        type: 'select',
      },
      options: ['start', 'center', 'end', 'stretch', 'baseline'],
    },
    direction: {
      control: {
        type: 'select',
      },
      options: ['row', 'column', 'rowReverse', 'columnReverse'],
    },
    wrap: {
      control: {
        type: 'select',
      },
      options: ['noWrap', 'wrap', 'wrapReverse'],
    },
    borderSize: {
      control: {
        type: 'text',
      },
    },
    gradientBlur: {
      control: {
        type: 'text',
      },
    },
    gradientHeight: {
      description: 'Gradient height (after pseudo element)',
      control: {
        type: 'text',
      },
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
  },

  component: component,
  title: 'RainbowBorder',
};
export default meta;
type Story = StoryObj<typeof component>;

export const Primary: Story = {
  args: {
    children: <Button>dwd</Button>,
    align: 'center',
    borderSize: '1px',
    gradientBlur: '2px\n',
    gradientHeight: '100%',
    justify: 'center',
    direction: 'row',
    className: 'dwdwdw',
  },
};

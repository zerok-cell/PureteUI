import type { Meta, StoryObj } from '@storybook/react';
import type { TypeWithDeepControls } from 'storybook-addon-deep-controls';
import { useClipboard } from '@purete-ui/components';

const component = () => <p>Your Components</p>;
// const customProperties = 'Custom properties';
// const standardProperties = 'Standard properties';
const meta: TypeWithDeepControls<Meta<typeof component>> = {
  args: {},

  argTypes: {},

  component: component,
  title: 'Clear',
};
export default meta;
type Story = StoryObj<typeof component>;

export const Primary: Story = () => {
  const x = useClipboard();
  const cl = async () => {
    const xd = await x.write('d');
    console.log(xd);
  };
  return <button onClick={cl}>BTN</button>;
};

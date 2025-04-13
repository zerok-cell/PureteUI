import type { Preview } from '@storybook/react';

const reassembleNestedArgs = (
  args: Record<string, any>
): Record<string, any> => {
  const newArgs: Record<string, any> = { ...args };

  Object.keys(newArgs).forEach((key) => {
    if (key.includes('.')) {
      const parts = key.split('.');
      const parent = parts[0];
      const child = parts.slice(1).join('.'); // поддержка вложенности более одного уровня
      if (!newArgs[parent] || typeof newArgs[parent] !== 'object') {
        newArgs[parent] = {};
      }
      newArgs[parent][child] = newArgs[key];
      delete newArgs[key];
    }
  });

  return newArgs;
};
const preview: Preview = {
  parameters: {
    darkMode: {
      current: 'dark',
    },
    deepControls: { enabled: true },
  },
  tags: ['autodocs'],
  decorators: [
    (Story, context) => {
      context.args = reassembleNestedArgs(context.args);
      return (
        <div
          style={{
            width: '100%',
            height: '80vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Story />
        </div>
      );
    },
  ],
};

export default preview;

import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    darkMode: {
      current: 'dark',
    },
    deepControls: { enabled: true },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => {
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

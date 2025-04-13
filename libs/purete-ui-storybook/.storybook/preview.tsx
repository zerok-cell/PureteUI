import type { Preview } from '@storybook/react';

export const parameters = {
  darkMode: {
    current: 'dark',
  },
};

const preview: Preview = {
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      return (
        <div
          style={{
            width: '100%',
            height: '80%',
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

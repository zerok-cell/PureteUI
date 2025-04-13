import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/*.@(mdx|stories.@(js|jsx|ts|tsx))'],
  
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    'storybook-dark-mode',
    '@storybook/addon-viewport',
    'storybook-addon-pseudo-states',
    '@storybook/addon-actions',
    'storybook-addon-deep-controls',
    '@storybook/addon-controls',
  ],
  viteFinal: async (config) => {
    return config;
  },
  framework: {
    name: '@storybook/react-vite',
    options: {
      builder: {
        viteConfigPath: 'vite.config.ts',
      },
    },
  },
};

export default config;

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/recipes/storybook/custom-builder-configs

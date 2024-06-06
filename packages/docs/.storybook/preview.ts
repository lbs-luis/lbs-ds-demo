import type { Preview } from "@storybook/react";
import '../src/tailwind.index.css';
import '@lbs-ds/react/dist/index.css';


const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'dark'
    },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

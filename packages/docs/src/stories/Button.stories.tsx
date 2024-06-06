import { StoryObj, Meta } from '@storybook/react'
import { Button, ThemeMenu } from '@lbs-ds/react'
import { Container } from '../components/Container'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    onClick: {
      table: {
        disable: true,
      },
    },
  },
  
  args: {
    children: <>Button</>,
    onClick: action('Botão foi clicado!'),
  },
} as Meta

export const Base: StoryObj = {
  decorators: [
    (Story) => (
      <Container>
        <Story />
      </Container>
    ),
  ],
}

export const Styled: StoryObj = {
  decorators: [
    (Story) => (
      <ThemeMenu>
        <Container absolute>
          <Story />
        </Container>
      </ThemeMenu>
    ),
  ],
}

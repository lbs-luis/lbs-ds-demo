import { StoryObj, Meta } from '@storybook/react'
import { ThemeMenu, Button } from '@lbs-ds/react'
import { Container } from '../components/Container'

export default {
  title: 'Theme Provider',
  component: ThemeMenu,
  argTypes: {
    appearance: {
      control: { type: 'select' },
      options: ['light', 'dark'],
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof ThemeMenu>

export const Base: StoryObj<typeof ThemeMenu> = {
  args: {
    appearance: "light",
    children: (
      <Container absolute>
        <Button />
      </Container>
    ),
  },
}

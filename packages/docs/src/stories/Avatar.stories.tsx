import { StoryObj, Meta } from '@storybook/react'
import { Avatar, ThemeMenu } from '@lbs-ds/react'
import { Container } from '../components/Container'

const defaultAvatar =
  'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop'
interface StyledArgs {
  src: string
  fallback: string
}

export default {
  title: 'Avatar',
  component: Avatar,
  argTypes: {
    src: {
      control: { type: 'text' },
    },
    fallback: {
      control: { type: 'text' },
    },
  },
  args: {
    src: defaultAvatar,
    fallback: 'A',
  },
} as Meta

export const Base: StoryObj<StyledArgs> = {
  decorators: [
    (Story, { args }: { args: StyledArgs }) => (
      <Container>
        <Story {...args} />
        <Avatar fallback={args.fallback} />
      </Container>
    ),
  ],
}

export const Styled: StoryObj<StyledArgs> = {
  decorators: [
    (Story, { args }: { args: StyledArgs }) => (
      <ThemeMenu>
        <Container absolute>
          <Story {...args} />
          <Avatar fallback={args.fallback} />
        </Container>
      </ThemeMenu>
    ),
  ],
}

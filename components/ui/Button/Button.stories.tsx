import type { Decorator } from '@storybook/nextjs-vite'

import { Button } from './index'

export default {
  argTypes: {
    buttonColor: {
      control: 'select',
    },
    href: {
      control: 'text',
    },
  },
  component: Button,
  decorators: [
    ((Story) => (
      <div className='flex min-h-screen items-center justify-center p-4'>
        <Story />
      </div>
    )) as Decorator,
  ],
}

export const Default = {
  args: {
    children: 'Click me',
  },
}

export const LongTextButton = {
  args: {
    children: 'This is a long text button that should wrap',
  },
}

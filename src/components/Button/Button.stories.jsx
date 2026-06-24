import React from 'react'
import { Button } from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    backgrounds: { default: 'black' },
    layout: 'centered',
  },
  argTypes: {
    variant: { control: 'radio', options: ['primary', 'secondary'] },
  },
}

export const Primary = {
  args: {
    variant: 'primary',
    children: 'Support This Project',
  },
}

export const Secondary = {
  args: {
    variant: 'secondary',
    children: 'Tell Us a Veteran Story',
  },
}

export const BothCTAs = {
  name: 'Both CTAs',
  render: () => (
    <div style={{ display: 'flex', gap: 0 }}>
      <Button variant="primary">Support This Project</Button>
      <Button variant="secondary">Tell Us a Veteran Story</Button>
    </div>
  ),
}

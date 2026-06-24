import React from 'react'
import { Attribution } from './Attribution'

export default {
  title: 'Components/Attribution',
  component: Attribution,
  parameters: {
    backgrounds: { default: 'black' },
    layout: 'centered',
  },
}

export const Default = {
  args: { children: 'Australian War Memorial' },
}

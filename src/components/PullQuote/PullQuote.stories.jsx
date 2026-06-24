import React from 'react'
import { PullQuote } from './PullQuote'

export default {
  title: 'Components/PullQuote',
  component: PullQuote,
  parameters: {
    backgrounds: { default: 'black' },
    layout: 'centered',
  },
}

export const Default = {
  args: {
    children: '"The largest attack ever carried out on Australian soil."',
  },
}

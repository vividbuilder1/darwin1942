import React from 'react'
import { LogoBrand } from './LogoBrand'

export default {
  title: 'Components/LogoBrand',
  component: LogoBrand,
  parameters: {
    backgrounds: { default: 'black' },
    layout: 'centered',
  },
}

export const White = {
  args: {
    src: '/assets/logo-white.png',
    alt: 'Darwin 1942 — The Forgotten War That Reshaped Australia',
  },
}

export const Dark = {
  args: {
    src: '/assets/logo-dark.png',
    alt: 'Darwin 1942 — The Forgotten War That Reshaped Australia',
  },
  parameters: {
    backgrounds: { default: 'paper' },
  },
}

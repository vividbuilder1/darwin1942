import React from 'react'
import { Eyebrow } from './Eyebrow'

export default {
  title: 'Components/Eyebrow',
  component: Eyebrow,
  parameters: {
    backgrounds: { default: 'black' },
    layout: 'centered',
  },
}

export const Default = {
  args: { children: 'A Documentary Feature in Production' },
}

import '../src/styles/globals.css'
import React from 'react'

/** @type { import('@storybook/react').Preview } */
const preview = {
  decorators: [
    (Story) => (
      <div style={{ background: '#000000', minHeight: '200px', padding: '2rem' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    backgrounds: {
      default: 'black',
      values: [
        { name: 'black', value: '#000000' },
        { name: 'paper', value: '#FDFDF9' },
        { name: 'dark',  value: '#1a1a1a' },
      ],
    },
    layout: 'centered',
  },
}
export default preview

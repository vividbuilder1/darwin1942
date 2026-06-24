import React from 'react'
import { ArchiveCaption } from './ArchiveCaption'

export default {
  title: 'Components/ArchiveCaption',
  component: ArchiveCaption,
  parameters: {
    backgrounds: { default: 'black' },
    layout: 'centered',
  },
}

export const Default = {
  args: { text: 'Archive Image Darwin Harbour 19 February 1942' },
  render: (args) => (
    <div style={{ position: 'relative', height: '300px', width: '200px' }}>
      <ArchiveCaption {...args} />
    </div>
  ),
}

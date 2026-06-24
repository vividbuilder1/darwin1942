import React from 'react'

export function Attribution({ children, className = '' }) {
  return (
    <cite className={`hero__attr block not-italic font-medium uppercase font-display text-paper ${className}`}>
      {children}
    </cite>
  )
}

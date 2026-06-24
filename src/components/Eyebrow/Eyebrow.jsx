import React from 'react'

export function Eyebrow({ children, className = '' }) {
  return (
    <p className={`hero__eyebrow font-light uppercase font-display ${className}`}>
      {children}
    </p>
  )
}

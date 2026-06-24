import React from 'react'

export function PullQuote({ children, className = '' }) {
  return (
    <blockquote className={`hero__quote font-bold italic font-quote text-ivory ${className}`}>
      {children}
    </blockquote>
  )
}

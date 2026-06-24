import React from 'react'

export function LogoBrand({ src, alt = 'Darwin 1942 — The Forgotten War That Reshaped Australia', className = '' }) {
  return (
    <h1 className={`hero__title ${className}`}>
      <img src={src} alt={alt} className="block h-auto" />
    </h1>
  )
}

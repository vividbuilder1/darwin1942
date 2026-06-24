import React from 'react'

export function ArchiveCaption({ text, className = '' }) {
  return (
    <div
      className={`hero__side absolute z-[4] flex flex-col items-center ${className}`}
      aria-hidden="true"
    >
      <span className="hero__side-text uppercase whitespace-nowrap font-normal font-display text-white/[.72]">
        {text}
      </span>
      <div className="hero__side-line w-px bg-white/[.62] shrink-0" />
    </div>
  )
}

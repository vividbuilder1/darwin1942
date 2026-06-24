import React from 'react'

const variants = {
  primary:   'btn--primary bg-crimson text-paper',
  secondary: 'btn--secondary bg-transparent border border-white/[.55] text-paper',
}

const base = 'btn inline-flex items-center justify-center no-underline whitespace-nowrap cursor-pointer uppercase font-medium font-display'

export function Button({ variant = 'primary', href, target, rel, onClick, children, className = '' }) {
  const cls = `${base} ${variants[variant]} ${className}`
  if (href) {
    return <a className={cls} href={href} target={target} rel={rel}>{children}</a>
  }
  return <button className={cls} onClick={onClick}>{children}</button>
}

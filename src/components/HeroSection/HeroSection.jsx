import React from 'react'
import { Eyebrow } from '../Eyebrow/Eyebrow'
import { LogoBrand } from '../LogoBrand/LogoBrand'
import { PullQuote } from '../PullQuote/PullQuote'
import { Attribution } from '../Attribution/Attribution'
import { ArchiveCaption } from '../ArchiveCaption/ArchiveCaption'
import { Button } from '../Button/Button'

export function HeroSection({
  heroImage,
  logoSrc,
  logoAlt,
  eyebrow,
  quote,
  attribution,
  captionText,
  primaryCta,
  secondaryCta,
}) {
  return (
    <section
      className="hero relative flex items-center justify-center overflow-hidden isolate bg-black text-paper font-display"
      aria-label="Darwin 1942 documentary"
    >
      {/* Archival photo */}
      <div
        className="hero__bg absolute z-0"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Dark wash */}
      <div className="absolute inset-0 z-[1] bg-black/[.32]" />

      {/* Brand gradient, multiply-blended */}
      <div className="hero__atmosphere absolute inset-0 z-[2] mix-blend-multiply pointer-events-none" />

      {captionText && <ArchiveCaption text={captionText} />}

      <div className="hero__content relative z-[4] flex flex-col items-center text-center w-full">
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        {logoSrc && <LogoBrand src={logoSrc} alt={logoAlt} />}
        {quote && <PullQuote>{quote}</PullQuote>}
        {attribution && <Attribution>{attribution}</Attribution>}

        <div className="hero__ctas flex items-stretch justify-center">
          {primaryCta && (
            <Button variant="primary" href={primaryCta.href} target="_blank" rel="noopener noreferrer">
              {primaryCta.label}
            </Button>
          )}
          {secondaryCta && (
            <Button variant="secondary" href={secondaryCta.href} target="_blank" rel="noopener noreferrer">
              {secondaryCta.label}
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}

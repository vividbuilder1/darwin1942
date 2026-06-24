import React from 'react'
import { HeroSection } from './HeroSection'

export default {
  title: 'Components/HeroSection',
  component: HeroSection,
  parameters: {
    layout: 'fullscreen',
    backgrounds: { disable: true },
  },
}

export const Default = {
  args: {
    heroImage: '/assets/hero.jpg',
    logoSrc: '/assets/logo-white.png',
    logoAlt: 'Darwin 1942 — The forgotten war that reshaped Australia.',
    eyebrow: 'A Documentary Feature in Production',
    quote: '"The largest attack ever carried out on Australian soil."',
    attribution: 'Australian War Memorial',
    captionText: 'Archive Image Darwin Harbour 19 February 1942',
    primaryCta: {
      href: 'https://tvgroup.com.au/donate-darwin1942/',
      label: 'Support This Project',
    },
    secondaryCta: {
      href: 'https://www.facebook.com/groups/bombing.of.darwin.documentary.stories',
      label: 'Tell Us a Veteran Story',
    },
  },
}

export const NoCaption = {
  name: 'Without Archive Caption',
  args: {
    ...Default.args,
    captionText: undefined,
  },
}

export const NoLogoDark = {
  name: 'Dark Logo (light bg)',
  args: {
    ...Default.args,
    heroImage: undefined,
    logoSrc: '/assets/logo-dark.png',
  },
  parameters: {
    backgrounds: { disable: false, default: 'paper' },
  },
}

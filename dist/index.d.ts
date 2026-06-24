import * as React from 'react';

export interface ButtonProps {
  /** Visual treatment: crimson-filled or ghost-border. Default: 'primary'. */
  variant?: 'primary' | 'secondary';
  /** Renders as <a> when set; otherwise renders as <button>. */
  href?: string;
  target?: string;
  rel?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  className?: string;
}
export declare function Button(props: ButtonProps): JSX.Element;

export interface EyebrowProps {
  /** Short label text above the title (e.g. "A Documentary Feature in Production"). */
  children?: React.ReactNode;
  className?: string;
}
export declare function Eyebrow(props: EyebrowProps): JSX.Element;

export interface PullQuoteProps {
  /** Italic serif quote text. Wrap in curly quotes for best presentation. */
  children?: React.ReactNode;
  className?: string;
}
export declare function PullQuote(props: PullQuoteProps): JSX.Element;

export interface AttributionProps {
  /** Uppercase citation below the pull quote (e.g. "Australian War Memorial"). */
  children?: React.ReactNode;
  className?: string;
}
export declare function Attribution(props: AttributionProps): JSX.Element;

export interface ArchiveCaptionProps {
  /** Vertical archival caption text running up the left edge of the hero. */
  text: string;
  className?: string;
}
export declare function ArchiveCaption(props: ArchiveCaptionProps): JSX.Element;

export interface LogoBrandProps {
  /** URL of the logo image asset. */
  src: string;
  /** Accessible alt text for the logo. */
  alt?: string;
  className?: string;
}
export declare function LogoBrand(props: LogoBrandProps): JSX.Element;

export interface CtaLink {
  href: string;
  label: string;
}

export interface HeroSectionProps {
  /** URL of the full-bleed archival photo (receives grayscale+sepia filter). */
  heroImage?: string;
  /** URL of the logo image to display as the headline title. */
  logoSrc?: string;
  /** Alt text for the logo. */
  logoAlt?: string;
  /** Small-caps eyebrow label above the logo. */
  eyebrow?: string;
  /** Italic serif pull quote. */
  quote?: string;
  /** Attribution line below the quote. */
  attribution?: string;
  /** Vertical archive caption on the left edge. */
  captionText?: string;
  /** Primary CTA button (crimson fill). */
  primaryCta?: CtaLink;
  /** Secondary CTA button (ghost border). */
  secondaryCta?: CtaLink;
}
export declare function HeroSection(props: HeroSectionProps): JSX.Element;

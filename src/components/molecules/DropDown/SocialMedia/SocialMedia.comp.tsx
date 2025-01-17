'use client'

import { Title } from '@/components/atoms/Title'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { ISocialMedia, socialMediaInfo } from '.'

const SocialMedia = ({
  wrapperElementClassName,
  socialMedia,
}: ISocialMedia): JSX.Element => {
  const { Logo, logoClassName, text, link } = socialMediaInfo[socialMedia]

  return (
    <Link href={link} target="_blank">
      <div
        className={twMerge('flex items-center gap-3', wrapperElementClassName)}
      >
        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-neutral-70">
          <Logo className={logoClassName} />
        </div>

        <Title tag="h6" className="text-sm font-ZonaPro text-neutral-70">
          {text}
        </Title>
      </div>
    </Link>
  )
}

export { SocialMedia }

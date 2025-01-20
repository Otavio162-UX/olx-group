import { Title } from '@/components/atoms/Title'

import Link from 'next/link'

import Icon from '@mdi/react'
import { twMerge } from 'tailwind-merge'
import { IHeaderDropDownSocialMedia } from './HeaderDropDownSocialMedia.interface'
import { headerDropDownSocialMediaProps } from './variables/headerDropDownSocialMediaProps'

const HeaderDropDownSocialMedia = ({
  wrapperElementClassName,
  socialMedia,
}: IHeaderDropDownSocialMedia): JSX.Element => {
  const { link, iconPath, iconClassName, text } =
    headerDropDownSocialMediaProps.socialMediaInfo[socialMedia]

  return (
    <Link href={link} target="_blank">
      <div
        className={twMerge('flex items-center gap-3', wrapperElementClassName)}
      >
        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-neutral-70">
          <Icon path={iconPath} size={1} className={iconClassName} />
        </div>

        <Title tag="h6" className="text-sm font-ZonaPro text-neutral-70">
          {text}
        </Title>
      </div>
    </Link>
  )
}

export { HeaderDropDownSocialMedia }

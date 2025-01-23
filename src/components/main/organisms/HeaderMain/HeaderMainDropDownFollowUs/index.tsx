'use client'

import { Title } from '@/components/generic/atoms/Title'
import { HeaderMainDropDownSocialMedia } from '@/components/main/molecules/HeaderMain/HeaderMainDropDownSocialMedia'
import { THeaderMainDropDownSocialMedia } from '@/components/main/molecules/HeaderMain/HeaderMainDropDownSocialMedia/HeaderDropDownSocialMedia.interface'
import { HeaderMainDropDownWrapper } from '@/components/main/molecules/HeaderMain/HeaderMainDropDownWrapper'
import { twMerge } from 'tailwind-merge'
import { headerMainDropDownFollowUsProps } from './variables/headerMainDropDownFollowUsProps'

const HeaderMainDropDownFollowUs = (): JSX.Element => {
  const { submenu } = headerMainDropDownFollowUsProps

  return (
    <HeaderMainDropDownWrapper>
      <div
        className={twMerge(
          'grid grid-cols-2 gap-8',
          'md:grid-cols-3',
          'lg:grid-cols-5'
        )}
      >
        {submenu.map((currentSubmenu, indexCurrentSubmenu) => (
          <div
            key={`follow-us-submenu-${indexCurrentSubmenu}`}
            className="flex flex-col gap-6"
          >
            {currentSubmenu.map((item, indexItem) =>
              item.socialMedia ? (
                <HeaderMainDropDownSocialMedia
                  key={`social-media-${indexItem}`}
                  socialMedia={
                    item.socialMedia as THeaderMainDropDownSocialMedia
                  }
                />
              ) : (
                <Title
                  key={`follow-us-submenu-item-${indexCurrentSubmenu}-${indexItem}`}
                  tag="h6"
                  className="font-ZonaPro font-bold text-base text-primary-70"
                >
                  {item.text}
                </Title>
              )
            )}
          </div>
        ))}
      </div>
    </HeaderMainDropDownWrapper>
  )
}

export { HeaderMainDropDownFollowUs }

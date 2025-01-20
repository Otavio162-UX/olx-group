'use client'

import { Title } from '@/components/atoms/Title'
import { HeaderDropDownSocialMedia } from '@/components/molecules/HeaderDropDown/HeaderDropDownSocialMedia'
import { THeaderDropDownSocialMedia } from '@/components/molecules/HeaderDropDown/HeaderDropDownSocialMedia/HeaderDropDownSocialMedia.interface'
import { HeaderDropDownWrapper } from '@/components/molecules/HeaderDropDown/HeaderDropDownWrapper'
import { twMerge } from 'tailwind-merge'
import { headerDropDownFollowUsProps } from './variables/headerDropDownFollowUsProps'

const HeaderDropDownFollowUs = (): JSX.Element => {
  const { submenu } = headerDropDownFollowUsProps

  return (
    <HeaderDropDownWrapper>
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
                <HeaderDropDownSocialMedia
                  key={`social-media-${indexItem}`}
                  socialMedia={item.socialMedia as THeaderDropDownSocialMedia}
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
    </HeaderDropDownWrapper>
  )
}

export { HeaderDropDownFollowUs }

'use client'

import { Title } from '@/components/atoms/Title'
import { SocialMedia } from '@/components/molecules/DropDown/SocialMedia'
import { TSocialMedia } from '@/components/molecules/DropDown/SocialMedia/SocialMedia.interface'
import { WrapperDropDown } from '@/components/molecules/DropDown/WrapperDropDown'
import { twMerge } from 'tailwind-merge'
import { followUsSubmenu } from './variables/followUsSubmenu'

const DropDownFollowUs = (): JSX.Element => {
  return (
    <WrapperDropDown>
      <div
        className={twMerge(
          'grid grid-cols-2 gap-8',
          'md:grid-cols-3',
          'lg:grid-cols-5'
        )}
      >
        {followUsSubmenu.map((submenu, indexSubmenu) => (
          <div
            key={`follow-us-submenu-${indexSubmenu}`}
            className="flex flex-col gap-6"
          >
            {submenu.map((item, indexItem) =>
              item.socialMedia ? (
                <SocialMedia
                  key={`social-media-${indexItem}`}
                  socialMedia={item.socialMedia as TSocialMedia}
                />
              ) : (
                <Title
                  key={`follow-us-submenu-item-${indexSubmenu}-${indexItem}`}
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
    </WrapperDropDown>
  )
}

export { DropDownFollowUs }

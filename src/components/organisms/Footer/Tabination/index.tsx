'use client'

import { ImageComponent } from '@/components/atoms/ImageComponent'
import { ButtonTabination } from '@/components/atoms/Tabination/ButtonTabination'
import { ScrollTabs } from '@/components/molecules/Tabination/ScrollTabs'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { ITabination } from './Tabination.interface'
import { getTabActive } from './functions/getTabActive'

const Tabination = ({ children, buttonsTab }: ITabination): JSX.Element => {
  const [tabActive, setTabActive] = useState({
    idActive: buttonsTab?.[0].id,
    childrenActive: getTabActive({ children, index: 0 }),
  })

  return (
    <div className="w-full">
      <ScrollTabs>
        {buttonsTab?.map((button, indexButton) => (
          <ButtonTabination
            key={`button-tab-${indexButton}`}
            variant={tabActive.idActive === button.id ? 'active' : 'inactive'}
            onClick={() =>
              setTabActive({
                idActive: button.id,
                childrenActive: getTabActive({
                  children,
                  index: indexButton,
                }),
              })
            }
          >
            {button.children}
          </ButtonTabination>
        ))}
      </ScrollTabs>

      <nav
        className={twMerge('py-6 flex flex-col gap-6', 'lg:flex-row lg:gap-12')}
      >
        <ImageComponent
          src="/logos/olxGroup.svg"
          alt="olx-group-logo-image"
          width={153}
          height={32}
          className="w-[9.5625rem] h-8 object-cover"
        />

        {tabActive.childrenActive}
      </nav>
    </div>
  )
}

export { Tabination }

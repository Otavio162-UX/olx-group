'use client'

import { TabinationButton } from '@/components/generic/atoms/Tabination/TabinationButton'
import { TabinationWrapperButtons } from '@/components/generic/molecules/Tabination/TabinationWrapperButtons'
import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { ITabination } from './Tabination.interface'
import { getTabActive } from './functions/getTabActive'

const Tabination = ({
  wrapperElementClassName,
  wrapperRightComponentClassName,
  tabinationButtonsWrapperClassName,
  RightComponent,
  children,
  buttonsTab,
  variantActive = 'active',
  resetStateOnChange,
}: ITabination): JSX.Element => {
  const [tabActive, setTabActive] = useState({
    idActive: buttonsTab?.[0].id,
    childrenActive: getTabActive({ children, index: 0 }),
  })

  useEffect(() => {
    setTabActive({
      idActive: buttonsTab?.[0].id,
      childrenActive: getTabActive({ children, index: 0 }),
    })
  }, [resetStateOnChange])

  return (
    <div className={twMerge('w-full', wrapperElementClassName)}>
      <div
        className={twMerge(
          'w-full flex justify-between',
          wrapperRightComponentClassName
        )}
      >
        {RightComponent}

        <TabinationWrapperButtons
          wrapperElementClassName={tabinationButtonsWrapperClassName}
        >
          {buttonsTab?.map((button, indexButton) => (
            <TabinationButton
              key={`button-tab-${indexButton}`}
              variant={
                tabActive.idActive === button.id ? variantActive : 'inactive'
              }
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
            </TabinationButton>
          ))}
        </TabinationWrapperButtons>
      </div>

      {tabActive.childrenActive}
    </div>
  )
}

export { Tabination }

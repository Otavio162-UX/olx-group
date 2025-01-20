'use client'

import { Button } from '@/components/main/atoms/Button'
import { mdiChevronDown } from '@mdi/js'
import Icon from '@mdi/react'
import { twMerge } from 'tailwind-merge'
import { IButtonCollapsible } from './ButtonCollapsible.interface'
import { useInitButtonCollapsible } from './hooks/useInitButtonCollapsible'
import { buttonCollapsibleProps } from './variables/buttonCollapsibleProps'

const ButtonCollapsible = ({
  wrapperElementClassName,
  buttonClassName,
  link,
  buttonTitle,
  children,
  changeHeaderColors,
  iconProps = { show: false, iconPath: '', iconClassName: '' },
  menuOpenRedirect,
}: IButtonCollapsible): JSX.Element => {
  const { ref, toggleMenu, openMenu, buttonsTargetId } =
    useInitButtonCollapsible({
      link,
      changeHeaderColors,
      menuOpenRedirect,
    })

  const { complementClassName } = buttonCollapsibleProps

  return (
    <div
      ref={ref}
      id={buttonsTargetId}
      className={twMerge(
        'w-full',
        'lg:w-max lg:h-full',
        wrapperElementClassName
      )}
    >
      <Button
        variant="clean"
        size="small"
        className={twMerge(
          'flex items-center w-full justify-between bg-primary-100 rounded-none py-4 text-neutral-70 text-lg',
          'lg:gap-1 lg:text-button-menu lg:w-max lg:py-6 lg:h-full lg:bg-transparent lg:px-0 lg:transition-all lg:relative lg:text-sm',
          openMenu && complementClassName.after,
          buttonClassName
        )}
        onClick={toggleMenu}
      >
        {buttonTitle}

        {iconProps.show && (
          <Icon
            path={iconProps.iconPath || mdiChevronDown}
            size={1}
            className={twMerge(
              openMenu && complementClassName.iconRotate,
              iconProps.iconClassName
            )}
          />
        )}
      </Button>

      {openMenu && children}
    </div>
  )
}

export { ButtonCollapsible }

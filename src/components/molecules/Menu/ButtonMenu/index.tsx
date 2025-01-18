'use client'

import { Button } from '@/components/atoms/Button'
import { mdiChevronDown } from '@mdi/js'
import Icon from '@mdi/react'
import { useMemo } from 'react'
import { twMerge } from 'tailwind-merge'
import { IButtonMenu } from './ButtonMenu.interface'
import { useInitButtonMenu } from './hooks/useInitButtonMenu'
import { menuClassName } from './variables/classNames'

const ButtonMenu = ({
  wrapperElementClassName,
  buttonClassName,
  iconClassName,
  link,
  buttonTitle,
  children,
  changeHeaderColors,
  iconPath,
  menuOpenRedirect,
}: IButtonMenu): JSX.Element => {
  const { ref, toggleMenu, openMenu, buttonsTargetId } = useInitButtonMenu({
    link,
    changeHeaderColors,
    menuOpenRedirect,
  })

  const currentIcon = useMemo(() => iconPath || mdiChevronDown, [])

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
          openMenu && menuClassName.after,
          buttonClassName
        )}
        onClick={toggleMenu}
      >
        {buttonTitle}

        {(!link || iconPath) && (
          <Icon
            path={currentIcon}
            size={1}
            className={twMerge(
              openMenu && menuClassName.iconRotate,
              iconClassName
            )}
          />
        )}
      </Button>

      {openMenu && children}
    </div>
  )
}

export { ButtonMenu }

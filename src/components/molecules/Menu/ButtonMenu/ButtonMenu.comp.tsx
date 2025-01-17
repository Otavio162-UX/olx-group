'use client'

import { Button } from '@/components/atoms/Button'
import { useMemo } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { twMerge } from 'tailwind-merge'
import { IButtonMenu, menuClassName, useInitButtonMenu } from '.'

const ButtonMenu = ({
  wrapperElementClassName,
  buttonClassName,
  iconClassName,
  link,
  buttonTitle,
  children,
  changeHeaderColors,
  Icon,
  menuOpenRedirect,
}: IButtonMenu): JSX.Element => {
  const { ref, toggleMenu, openMenu, buttonsTargetId } = useInitButtonMenu({
    link,
    changeHeaderColors,
    menuOpenRedirect,
  })

  const CurrentIcon = useMemo(() => Icon || IoIosArrowDown, [Icon])

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

        {(!link || Icon) && (
          <CurrentIcon
            className={twMerge(
              'text-xl size-6 m-1',
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

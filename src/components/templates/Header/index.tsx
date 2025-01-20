import { HeaderLogo } from '@/components/atoms/Header/HeaderLogo'
import { HeaderMenuDesktop } from '@/components/organisms/HeaderMenu/HeaderMenuDesktop'
import { HeaderMenuMobile } from '@/components/organisms/HeaderMenu/HeaderMenuMobile'
import { twMerge } from 'tailwind-merge'
import { headerLeftMenu, headerRightMenu } from './arrays/headerMenu'

const Header = (): JSX.Element => {
  return (
    <header
      className={twMerge(
        'h-[4.5rem] bg-header-mobile-background relative',
        'lg:bg-header-desktop-background'
      )}
    >
      <nav
        className={twMerge(
          'wrapperContainer h-full flex items-center justify-between',
          'lg:max-w-container1328'
        )}
      >
        <div className={twMerge('flex items-center h-full', 'lg:gap-8')}>
          <HeaderLogo />

          <div
            className={twMerge(
              'hidden',
              'lg:flex lg:items-center lg:gap-4 lg:h-full'
            )}
          >
            <HeaderMenuDesktop headerMenu={headerLeftMenu} />
          </div>
        </div>

        <div className="h-full">
          <div
            className={twMerge(
              'hidden',
              'lg:flex lg:items-center lg:gap-4 lg:h-full'
            )}
          >
            <HeaderMenuDesktop headerMenu={headerRightMenu} />
          </div>
          <HeaderMenuMobile />
        </div>
      </nav>
    </header>
  )
}

export { Header }

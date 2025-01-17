import { Logo } from '@/components/atoms/Header/Logo'
import { DesktopMenu } from '@/components/organisms/Menu/DesktopMenu'
import { MobileMenu } from '@/components/organisms/Menu/MobileMenu/MobileMenu.comp'
import { twMerge } from 'tailwind-merge'
import { menu } from './arrays'

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
          <Logo />

          <div
            className={twMerge(
              'hidden',
              'lg:flex lg:items-center lg:gap-4 lg:h-full'
            )}
          >
            <DesktopMenu menu={menu.slice(0, 3)} />
          </div>
        </div>

        <div className="h-full">
          <div
            className={twMerge(
              'hidden',
              'lg:flex lg:items-center lg:gap-4 lg:h-full'
            )}
          >
            <DesktopMenu menu={menu.slice(3)} />
          </div>
          <MobileMenu />
        </div>
      </nav>
    </header>
  )
}

export { Header }

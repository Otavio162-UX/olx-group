import { HeaderMainLogo } from '@/components/main/atoms/HeaderMain/HeaderLogo'
import { HeaderMainMenuDesktop } from '@/components/main/organisms/HeaderMain/HeaderMainMenuDesktop'
import { HeaderMenuMobile } from '@/components/main/organisms/HeaderMain/HeaderMainMenuMobile'
import { twMerge } from 'tailwind-merge'
import {
  headerMainLeftMenu,
  headerMainRightMenu,
} from './arrays/headerMainMenu'

const HeaderMain = (): JSX.Element => {
  return (
    <header
      className={twMerge(
        'h-[4.5rem] bg-header-mobile-background w-full sticky top-0 z-10',
        'lg:bg-header-desktop-background lg:static'
      )}
    >
      <div className={'w-full h-full relative'}>
        <nav
          className={twMerge(
            'wrapperContainer h-full flex items-center justify-between',
            'lg:max-w-container1328'
          )}
        >
          <div className={twMerge('flex items-center h-full', 'lg:gap-8')}>
            <HeaderMainLogo />

            <div
              className={twMerge(
                'hidden',
                'lg:flex lg:items-center lg:gap-4 lg:h-full'
              )}
            >
              <HeaderMainMenuDesktop headerMenu={headerMainLeftMenu} />
            </div>
          </div>

          <div className="h-full">
            <div
              className={twMerge(
                'hidden',
                'lg:flex lg:items-center lg:gap-4 lg:h-full'
              )}
            >
              <HeaderMainMenuDesktop headerMenu={headerMainRightMenu} />
            </div>
            <HeaderMenuMobile />
          </div>
        </nav>
      </div>
    </header>
  )
}

export { HeaderMain }

import { Title } from '@/components/atoms/Title'
import { ButtonMenu } from '@/components/molecules/Menu/ButtonMenu'
import { Fragment } from 'react'
import { twMerge } from 'tailwind-merge'
import { LinkTab } from '../LinkTab'
import { ITabs } from './Tabs.interface'

const Tabs = ({ navigationList }: ITabs): JSX.Element => {
  return (
    <nav
      className={twMerge('grid grid-cols-1 w-full', 'lg:grid-cols-3 lg:gap-12')}
    >
      {navigationList.map((items, indexItem) => (
        <Fragment key={`navigation-list-${indexItem}`}>
          <div className={twMerge('block', 'lg:hidden')}>
            <ButtonMenu
              buttonTitle={items.title}
              buttonClassName="bg-neutral-70 text-primary-100"
              iconProps={{
                show: true,
              }}
            >
              <div>
                {items.navigation.map((navigation, indexNavigation) => (
                  <LinkTab
                    key={`footer-navigation-mobile-${indexItem}-${indexNavigation}`}
                    {...navigation}
                    textClassName={twMerge(
                      'py-3 px-4',
                      navigation.textClassName
                    )}
                  />
                ))}
              </div>
            </ButtonMenu>
          </div>

          <div className={twMerge('hidden', 'lg:flex lg:flex-col lg:gap-3')}>
            <Title tag="h6" className="text-primary-100 font-semibold">
              {items.title}
            </Title>

            <div className="flex flex-col gap-6">
              {items.navigation.map((navigation, indexNavigation) => (
                <LinkTab
                  {...navigation}
                  key={`footer-navigation-desktop-${indexItem}-${indexNavigation}`}
                />
              ))}
            </div>
          </div>
        </Fragment>
      ))}
    </nav>
  )
}

export { Tabs }

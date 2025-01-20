import { FooterLinksSection } from '@/components/organisms/Footer/FooterLinksSection'
import { Tabination } from '@/components/organisms/Footer/Tabination'
import { Tabs } from '@/components/organisms/Footer/Tabs'
import { twMerge } from 'tailwind-merge'
import { buttonsTab } from './arrays/buttonsTab'
import { footerTabs } from './arrays/footerTabs'

const Footer = (): JSX.Element => {
  return (
    <footer
      className={twMerge(
        'mt-auto wrapperContainer py-6 gap-6',
        'lg:max-w-container1056 lg:py-20'
      )}
    >
      <Tabination buttonsTab={buttonsTab}>
        {footerTabs.map((tabNavigation, indexTabNavigation) => (
          <Tabs
            navigationList={tabNavigation}
            key={`tab-footer-${indexTabNavigation}`}
          />
        ))}
      </Tabination>

      <FooterLinksSection />
    </footer>
  )
}

export { Footer }

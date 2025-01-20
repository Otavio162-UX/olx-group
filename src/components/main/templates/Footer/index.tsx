import { FooterLinksSection } from '@/components/main/organisms/Footer/FooterLinksSection'
import { FooterTabs } from '@/components/main/organisms/Footer/FooterTabs'
import { Tabination } from '@/components/main/organisms/Tabination'
import { twMerge } from 'tailwind-merge'
import { footerButtonsTab } from './arrays/footerButtonsTab'
import { footerTabs } from './arrays/footerTabs'

const Footer = (): JSX.Element => {
  return (
    <footer
      className={twMerge(
        'mt-auto wrapperContainer py-6 gap-6',
        'lg:max-w-container1056 lg:py-20'
      )}
    >
      <Tabination buttonsTab={footerButtonsTab}>
        {footerTabs.map((tabNavigation, indexTabNavigation) => (
          <FooterTabs
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

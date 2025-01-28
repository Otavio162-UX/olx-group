import { Tabination } from '@/components/generic/organisms/Tabination'
import { FooterMainLinks } from '@/components/main/organisms/FooterMain/FooterMainLinks'
import { FooterMainTabs } from '@/components/main/organisms/FooterMain/FooterMainTabs'
import { twMerge } from 'tailwind-merge'
import { footerMainButtonsTab } from './arrays/footerMainButtonsTab'
import { footerMainTabs } from './arrays/footerMainTabs'

const FooterMain = (): JSX.Element => {
  return (
    <footer
      className={twMerge(
        'mt-auto wrapperContainer py-6 gap-6',
        'lg:max-w-container1056 lg:py-20'
      )}
    >
      <Tabination buttonsTab={footerMainButtonsTab}>
        {footerMainTabs.map((tabNavigation, indexTabNavigation) => (
          <FooterMainTabs
            navigationList={tabNavigation}
            key={`tab-footer-${indexTabNavigation}`}
          />
        ))}
      </Tabination>

      <FooterMainLinks />
    </footer>
  )
}

export { FooterMain }

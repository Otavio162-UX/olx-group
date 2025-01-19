import { FooterLinksSection } from '@/components/organisms/Footer/FooterLinksSection'
import { Tabination } from '@/components/organisms/Footer/Tabination'
import { twMerge } from 'tailwind-merge'
import { buttonsTab } from './arrays/buttonsTab'

const Footer = (): JSX.Element => {
  return (
    <footer
      className={twMerge(
        'mt-auto wrapperContainer py-6 gap-6',
        'lg:max-w-container1056 lg:py-20'
      )}
    >
      <Tabination buttonsTab={buttonsTab}>
        <div>oi</div>
        <div>Autos</div>
        <div>Bens de consumo</div>
        <div>Eventos</div>
        <div>Publicidade</div>
      </Tabination>

      <FooterLinksSection />
    </footer>
  )
}

export { Footer }

import { Text } from '@/components/generic/atoms/Text'
import { FooterSocialMedia } from '@/components/generic/molecules/FooterSocialMedia'
import { FooterMainHelperLinks } from '@/components/main/molecules/FooterMain/FooterMainHelperLinks'
import { twMerge } from 'tailwind-merge'

const FooterMainLinks = (): JSX.Element => {
  return (
    <nav
      className={twMerge(
        'w-full flex flex-col gap-6 border-t border-neutral-90 py-6',
        'md:items-center',
        'lg:flex-row lg:justify-between'
      )}
    >
      <div className="flex flex-col gap-2 flex-1">
        <FooterMainHelperLinks />

        <Text tag="p" className="text-xs text-neutral-130 font-ZonaPro">
          © Bom Negócio Atividades de Internet Ltda. - Rua do Catete, 359,
          Flamengo - 22220-001 - Rio de Janeiro, RJ
        </Text>
      </div>

      <FooterSocialMedia />
    </nav>
  )
}

export { FooterMainLinks }

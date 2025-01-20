import { Button } from '@/components/atoms/Button'
import { Text } from '@/components/atoms/Text'
import { FooterSocialMedia } from '@/components/molecules/Footer/FooterSocialMedia'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { footerLinks } from './arrays/links'

const FooterLinksSection = (): JSX.Element => {
  return (
    <nav
      className={twMerge(
        'w-full flex flex-col gap-6 border-t border-neutral-90 py-6',
        'md:items-center',
        'lg:flex-row lg:justify-between'
      )}
    >
      <div className="flex flex-col gap-2 flex-1">
        <div className="flex gap-4 overflow-x-auto">
          {footerLinks.map((footerLink, indexFooterLink) => (
            <Link
              key={`footer-link-button-${indexFooterLink}`}
              href={footerLink.link}
              target="_blank"
            >
              <Button
                variant="link"
                className="text-neutral-130 p-0 text-xs text-nowrap"
              >
                {footerLink.title}
              </Button>
            </Link>
          ))}
        </div>

        <Text tag="p" className="text-xs text-neutral-130 font-ZonaPro">
          © Bom Negócio Atividades de Internet Ltda. - Rua do Catete, 359,
          Flamengo - 22220-001 - Rio de Janeiro, RJ
        </Text>
      </div>

      <FooterSocialMedia />
    </nav>
  )
}

export { FooterLinksSection }

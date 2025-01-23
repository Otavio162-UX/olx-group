import { Button } from '@/components/generic/atoms/Button'
import { footerHelperLinks } from '@/variables/footer/links'
import Link from 'next/link'

const FooterMainHelperLinks = (): JSX.Element => {
  return (
    <div className="flex gap-4 overflow-x-auto">
      {footerHelperLinks.map((footerLink, indexFooterLink) => (
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
  )
}

export { FooterMainHelperLinks }

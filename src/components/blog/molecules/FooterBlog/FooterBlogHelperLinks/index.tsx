import { Button } from '@/components/generic/atoms/Button'
import { footerHelperLinks } from '@/variables'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

const FooterBlogHelperLinks = (): JSX.Element => {
  return (
    <div
      className={twMerge(
        'flex gap-4 flex-wrap mx-auto max-w-[84%]',
        'lg:lg:max-w-full lg:mx-0'
      )}
    >
      {footerHelperLinks.map((footerLink, indexFooterLink) => (
        <Link
          key={`footer-link-button-${indexFooterLink}`}
          href={footerLink.link}
          target="_blank"
          className={twMerge('flex-1 flex justify-center', 'lg:flex-none')}
        >
          <Button
            variant="link"
            className="text-neutral-130 p-0 text-xs text-nowrap text-center"
          >
            {footerLink.title}
          </Button>
        </Link>
      ))}
    </div>
  )
}

export { FooterBlogHelperLinks }

import { ImageComponent } from '@/components/atoms/ImageComponent'
import Icon from '@mdi/react'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { footerSocialMediaIcons } from './arrays/footerSocialMediaIcons'

const FooterSocialMedia = (): JSX.Element => {
  return (
    <div className={twMerge('mx-auto flex items-center gap-4', 'md:mx-0')}>
      <div className="w-10 h-10 flex items-center justify-center">
        <ImageComponent
          src="/footer/enjoei.svg"
          alt="enjoei-icon"
          width={32}
          height={32}
          className="w-8 h-8 object-cover"
        />
      </div>

      {footerSocialMediaIcons.map((item, indexItem) => (
        <Link
          href={item.link}
          target="_blank"
          key={`footer-social-media-${indexItem}`}
          className="w-10 h-10 flex items-center justify-center"
        >
          <Icon path={item.iconPath} size={1} className="text-neutral-130" />
        </Link>
      ))}
    </div>
  )
}

export { FooterSocialMedia }

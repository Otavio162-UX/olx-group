import { ImageComponent } from '@/components/generic/atoms/ImageComponent'
import { twMerge } from 'tailwind-merge'

const FooterBlogLogo = (): JSX.Element => {
  return (
    <>
      <ImageComponent
        src="/blog/logos/logo-group.svg"
        alt="olx-group-logo"
        width={252}
        height={24}
        className={twMerge(
          'w-[15.75rem] h-6 object-cover mx-auto',
          'lg:hidden'
        )}
      />

      <ImageComponent
        src="/blog/logos/logo-group-break.svg"
        alt="olx-group-logo"
        width={199}
        height={112}
        className={twMerge(
          'hidden',
          'lg:block lg:w-[12.4375rem] lg:h-[7rem] lg:object-cover'
        )}
      />
    </>
  )
}

export { FooterBlogLogo }

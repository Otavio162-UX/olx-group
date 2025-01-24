import { IImageComponent } from '@/components/generic/atoms/ImageComponent/ImageComponent.interface'
import { TBlogVariants } from '@/types/global'
import { twMerge } from 'tailwind-merge'

const logoProps: Record<TBlogVariants, IImageComponent> = {
  autos: {
    src: '/blog/logos/autosLogoGroup.svg',
    alt: 'autos-logo',
    width: 180,
    height: 24,
    className: twMerge(
      'w-[11.25rem] h-6 object-cover mx-auto',
      'lg:w-[22.7rem] lg:h-12 lg:mx-0'
    ),
  },
  immobile: {
    src: '/blog/logos/immobileLogoGroup.svg',
    alt: 'immobile-logo',
    width: 252,
    height: 24,
    className: twMerge(
      'w-[15.75rem] h-6 object-cover mx-auto',
      'lg:hidden lg:mx-0'
    ),
  },
}

export const footerBlogLogoProps = {
  logoProps,
}

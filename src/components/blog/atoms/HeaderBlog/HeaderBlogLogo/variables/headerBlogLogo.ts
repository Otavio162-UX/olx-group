import { IImageComponent } from '@/components/generic/atoms/ImageComponent/ImageComponent.interface'
import { TBlogVariants } from '@/types/global'

const logoProps: Record<TBlogVariants, IImageComponent> = {
  autos: {
    src: '/blog/logos/autosLogoGroup.svg',
    alt: 'autos-logo',
    width: 180,
    height: 24,
    className: 'w-[11.25rem] h-6 object-cover',
  },
  immobile: {
    src: '/blog/logos/immobileLogoGroup.svg',
    alt: 'immobile-logo',
    width: 252,
    height: 24,
    className: 'w-[15.75rem] h-6 object-cover',
  },
}

export const headerBlogLogoProps = {
  logoProps,
}

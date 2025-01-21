import { IBrandGroupCard } from '@/components/generic/molecules/BrandGroupCard/BrandGroupCard.interface'

const brandGroupDefaultClassName = 'w-[10.125rem] h-full object-cover'

export const brandGroupImages: IBrandGroupCard[] = [
  {
    src: '/logos/olx.svg',
    alt: 'olx-logo',
    className: brandGroupDefaultClassName,
  },
  {
    src: '/logos/zap.svg',
    alt: 'zap-logo',
    className: brandGroupDefaultClassName,
  },
  {
    src: '/logos/vivaReal.svg',
    alt: 'vivaReal-logo',
    className: 'w-[18.5rem] h-full object-cover',
  },
]

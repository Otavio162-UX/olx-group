import { IBrandGroupCard } from '@/components/generic/molecules/BrandGroupCard/BrandGroupCard.interface'
import { ExternalRoutes } from '@/routes/routes'

const brandGroupDefaultClassName = 'w-[10.125rem] h-full object-cover'

export const brandGroupImages: IBrandGroupCard[] = [
  {
    src: '/main/logos/olx.svg',
    alt: 'olx-logo',
    className: brandGroupDefaultClassName,
    link: ExternalRoutes['OLX_E-COMMERCE'],
  },
  {
    src: '/main/logos/zap.svg',
    alt: 'zap-logo',
    className: brandGroupDefaultClassName,
    link: ExternalRoutes.ZAP_SITE,
  },
  {
    src: '/main/logos/vivaReal.svg',
    alt: 'vivaReal-logo',
    className: 'w-[18.5rem] h-full object-cover',
    link: ExternalRoutes.VIVA_REAL_SITE,
  },
]

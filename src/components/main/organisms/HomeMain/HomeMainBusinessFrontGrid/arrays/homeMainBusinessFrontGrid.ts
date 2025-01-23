import { IHomeMainBusinessFrontGridCard } from '@/components/main/molecules/HomeMain/HomeMainBusinessFrontGridCard/HomeMainBusinessFrontGridCard.interface'
import { InternalRoutes } from '@/routes/routes'

export const homeMainBusinessFrontGrid: IHomeMainBusinessFrontGridCard[] = [
  {
    src: '/main/home/businessFrontImmobile.svg',
    alt: 'immobile-image',
    title: 'Imóveis',
    description: 'Encontre as melhores soluções para o mercado imobiliário.',
    link: InternalRoutes.IMMOBILE,
  },
  {
    src: '/main/home/businessFrontAutos.svg',
    alt: 'autos-image',
    title: 'Autos',
    description: 'Descubra como podemos te ajudar no ramo automotivo.',
    link: InternalRoutes.AUTOS,
  },
  {
    src: '/main/home/businessFrontAdvertising.svg',
    alt: 'advertising-image',
    title: 'Publicidade',
    description: 'Transforme nossos números em visibilidade para seu negócio.',
    link: InternalRoutes.ADVERTISING,
  },
  {
    src: '/main/home/businessFrontConsumerGoods.svg',
    alt: 'consumer-goods-image',
    title: 'Bens de Consumo',
    description: 'Anuncie seus produtos em diversas categorias.',
    link: InternalRoutes.CONSUMER_GOODS,
  },
]

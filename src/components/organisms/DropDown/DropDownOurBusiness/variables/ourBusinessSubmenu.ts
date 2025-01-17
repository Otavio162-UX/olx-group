import { InternalRoutes } from '@/routes'

export type TSubmenuOurBusiness =
  | {
      title: string
      link?: undefined
    }
  | {
      title: string
      link: string
    }

interface IOurBusinessSubmenu {
  title: string
  link: string
  submenu: TSubmenuOurBusiness[]
}

export const ourBusinessSubmenu: IOurBusinessSubmenu[] = [
  {
    title: 'Imóveis',
    link: InternalRoutes.IMMOBILE,
    submenu: [
      {
        title: 'DataZap',
      },
      {
        title: 'ZapWay',
      },
      {
        title: 'Nossos Planos',
      },
      {
        title: 'Canal Pro',
      },
      {
        title: 'Clube Zap',
      },
      {
        title: 'Blog Imóveis',
        link: InternalRoutes.IMMOBILE,
      },
    ],
  },
  {
    title: 'Autos',
    link: InternalRoutes.AUTOS,
    submenu: [
      {
        title: 'DataOLX',
      },
      {
        title: 'Altimus',
      },
      {
        title: 'Nossos Planos',
      },
      {
        title: 'Clube OLX',
      },
      {
        title: 'Blog Autos',
        link: InternalRoutes.AUTOS,
      },
    ],
  },
  {
    title: 'Bens de Consumo',
    link: InternalRoutes.CONSUMER_GOODS,
    submenu: [
      {
        title: 'Análise setorial',
      },
    ],
  },
  {
    title: 'Eventos',
    link: InternalRoutes.EVENTS,
    submenu: [
      {
        title: 'Conecta Imobi',
      },
      {
        title: 'Conecta Imobi Academy',
      },
      {
        title: 'Conecta Autos',
      },
    ],
  },
  {
    title: 'Publicidade',
    link: InternalRoutes.ADVERTISING,
    submenu: [],
  },
]

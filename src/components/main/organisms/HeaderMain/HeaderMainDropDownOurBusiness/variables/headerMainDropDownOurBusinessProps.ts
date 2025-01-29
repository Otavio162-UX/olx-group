import { IButtonCollapsibleProps } from '@/components/generic/molecules/ButtonCollapsible/ButtonCollapsible.interface'
import { InternalRoutes } from '@/routes/routes'
import { mdiChevronRight } from '@mdi/js'

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

const submenu: IOurBusinessSubmenu[] = [
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

interface IHeaderDropDownOurBusinessProps {
  buttonIconProps: IButtonCollapsibleProps
  submenu: IOurBusinessSubmenu[]
}

export const headerMainDropDownOurBusinessProps: IHeaderDropDownOurBusinessProps =
  {
    buttonIconProps: {
      iconPath: mdiChevronRight,
      show: true,
      iconClassName: 'rotate-0',
    },
    submenu,
  }

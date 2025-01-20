import { INavigationFooterTab } from '@/components/main/organisms/Footer/FooterTabs/FooterTabs.interface'
import { InternalRoutes } from '@/routes/routes'

const whoWeAre: INavigationFooterTab = {
  title: 'Quem Somos',
  navigation: [
    {
      text: 'Quem Somos',
      href: InternalRoutes.WHO_WE_ARE,
    },
    {
      text: 'Nossa história',
      href: '/naoSabeAinda', // substituir depois
    },
    {
      text: 'Números',
      href: '/naoSabeAinda', // substituir depois
    },
    {
      text: 'Causas que apoiamos',
      href: '/naoSabeAinda', // substituir depois
    },
    {
      text: 'Imprensa',
      href: InternalRoutes.MEDIA,
    },
    {
      text: 'Trabalhe Conosco',
      href: InternalRoutes.CAREERS,
    },
  ],
}

const ourPortals: INavigationFooterTab = {
  title: 'Nossos portais',
  navigation: [
    {
      text: 'OLX',
      href: 'naoSabeAinda', // substituir depois
    },
    {
      text: 'ZAP',
      href: '/naoSabeAinda', // substituir depois
    },
    {
      text: 'Viva Real',
      href: '/naoSabeAinda', // substituir depois
    },
  ],
}

export const immobileTabs: INavigationFooterTab[] = [
  whoWeAre,
  ourPortals,
  {
    title: 'Nossos negócios',
    navigation: [
      {
        text: 'DataZap',
        href: 'naoSabeAinda', // substituir depois
      },
      {
        text: 'ZapWay',
        href: '/naoSabeAinda', // substituir depois
      },
      {
        text: 'Nossos Planos',
        href: '/naoSabeAinda', // substituir depois
      },
      {
        text: 'Canal Pro',
        href: '/naoSabeAinda', // substituir depois
      },
      {
        text: 'Clube Zap',
        href: '/naoSabeAinda', // substituir depois
      },
      {
        text: 'Blog Imóveis',
        href: '/naoSabeAinda', // substituir depois
        showIcon: true,
        textClassName: 'text-orange-100',
      },
    ],
  },
]

export const autosTabs: INavigationFooterTab[] = [
  whoWeAre,
  ourPortals,
  {
    title: 'Nossos negócios',
    navigation: [
      {
        text: 'DataOLX',
        href: 'naoSabeAinda', // substituir depois
      },
      {
        text: 'Altimus',
        href: '/naoSabeAinda', // substituir depois
      },
      {
        text: 'Nossos Planos',
        href: '/naoSabeAinda', // substituir depois
      },
      {
        text: 'Clube OLX',
        href: '/naoSabeAinda', // substituir depois
      },
      {
        text: 'Blog Autos',
        href: '/naoSabeAinda', // substituir depois
        showIcon: true,
        textClassName: 'text-primary-100',
      },
    ],
  },
]

export const consumerGoodsTabs: INavigationFooterTab[] = [
  whoWeAre,
  ourPortals,
  {
    title: 'Nossos negócios',
    navigation: [
      {
        text: 'Análise setorial',
        href: '/naoSabeAinda', // substituir depois
      },
    ],
  },
]

export const eventsTabs: INavigationFooterTab[] = [
  whoWeAre,
  ourPortals,
  {
    title: 'Nossos negócios',
    navigation: [
      {
        text: 'Conecta Imobi',
        href: '/naoSabeAinda', // substituir depois
      },
      {
        text: 'Conecta Imobi Academy',
        href: '/naoSabeAinda', // substituir depois
      },
      {
        text: 'Conecta Autos',
        href: '/naoSabeAinda', // substituir depois
      },
    ],
  },
]

export const advertisingTabs: INavigationFooterTab[] = [whoWeAre, ourPortals]

export const footerTabs = [
  immobileTabs,
  autosTabs,
  consumerGoodsTabs,
  eventsTabs,
  advertisingTabs,
]

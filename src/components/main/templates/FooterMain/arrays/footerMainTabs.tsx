import { INavigationFooterMainTab } from '@/components/main/organisms/FooterMain/FooterMainTabs/FooterTabs.interface'
import { InternalRoutes } from '@/routes/routes'

const whoWeAre: INavigationFooterMainTab = {
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

const ourPortals: INavigationFooterMainTab = {
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

export const immobileTabs: INavigationFooterMainTab[] = [
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

export const autosTabs: INavigationFooterMainTab[] = [
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

export const consumerGoodsTabs: INavigationFooterMainTab[] = [
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

export const eventsTabs: INavigationFooterMainTab[] = [
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

export const advertisingTabs: INavigationFooterMainTab[] = [
  whoWeAre,
  ourPortals,
]

export const footerMainTabs = [
  immobileTabs,
  autosTabs,
  consumerGoodsTabs,
  eventsTabs,
  advertisingTabs,
]

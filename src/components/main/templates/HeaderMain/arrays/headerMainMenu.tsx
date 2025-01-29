import { HeaderMainDropDownDefault } from '@/components/main/organisms/HeaderMain/HeaderMainDropDownDefault'
import { HeaderMainDropDownFollowUs } from '@/components/main/organisms/HeaderMain/HeaderMainDropDownFollowUs'
import { HeaderMainDropDownOurBusiness } from '@/components/main/organisms/HeaderMain/HeaderMainDropDownOurBusiness'
import { InternalRoutes } from '@/routes/routes'
import { THeaderMenu } from '@/types/global'

const whoWeAre: THeaderMenu = {
  buttonTitle: 'Quem somos',
  children: <HeaderMainDropDownDefault dropDownDefault="whoWeAre" />,
  iconProps: {
    show: true,
  },
}

const ourPortals: THeaderMenu = {
  buttonTitle: 'Nossos portais',
  children: <HeaderMainDropDownDefault dropDownDefault="ourPortals" />,
  iconProps: {
    show: true,
  },
}

const ourBusiness: THeaderMenu = {
  buttonTitle: 'Nossos negócios',
  children: <HeaderMainDropDownOurBusiness />,
  iconProps: {
    show: true,
  },
}

const followUs: THeaderMenu = {
  buttonTitle: 'Nos siga',
  children: <HeaderMainDropDownFollowUs />,
  iconProps: {
    show: true,
  },
}

export const headerMainMenu: THeaderMenu[] = [
  whoWeAre,
  ourPortals,
  ourBusiness,
  {
    buttonTitle: 'Carreira',
    link: InternalRoutes.CAREERS,
  },
  {
    buttonTitle: 'Imprensa',
    link: InternalRoutes.MEDIA,
  },
  followUs,
]

export const headerMainLeftMenu = headerMainMenu.slice(0, 3)

export const headerMainRightMenu = headerMainMenu.slice(3)

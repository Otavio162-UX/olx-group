import { IMenuButton } from '@/components/molecules/ButtonCollapsible/ButtonCollapsible.interface'
import { HeaderDropDownDefault } from '@/components/organisms/HeaderDropDown/HeaderDropDownDefault'
import { HeaderDropDownFollowUs } from '@/components/organisms/HeaderDropDown/HeaderDropDownFollowUs'
import { HeaderDropDownOurBusiness } from '@/components/organisms/HeaderDropDown/HeaderDropDownOurBusiness'
import { InternalRoutes } from '@/routes/routes'

type THeaderMenu = Pick<
  IMenuButton,
  'link' | 'buttonTitle' | 'children' | 'iconProps'
>

const whoWeAre: THeaderMenu = {
  buttonTitle: 'Quem somos',
  children: <HeaderDropDownDefault dropDownDefault="whoWeAre" />,
  iconProps: {
    show: true,
  },
}

const ourPortals: THeaderMenu = {
  buttonTitle: 'Nossos portais',
  children: <HeaderDropDownDefault dropDownDefault="ourPortals" />,
  iconProps: {
    show: true,
  },
}

const ourBusiness: THeaderMenu = {
  buttonTitle: 'Nossos negócios',
  children: <HeaderDropDownOurBusiness />,
  iconProps: {
    show: true,
  },
}

const followUs: THeaderMenu = {
  buttonTitle: 'Nos siga',
  children: <HeaderDropDownFollowUs />,
  iconProps: {
    show: true,
  },
}

export const headerMenu: THeaderMenu[] = [
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

export const headerLeftMenu = headerMenu.slice(0, 3)

export const headerRightMenu = headerMenu.slice(3)

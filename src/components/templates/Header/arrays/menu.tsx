import { IButtonMenu } from '@/components/molecules/Menu/ButtonMenu/ButtonMenu.interface'
import { DropDownDefault } from '@/components/organisms/DropDown/DropDownDefault'
import { DropDownFollowUs } from '@/components/organisms/DropDown/DropDownFollowUs'
import { DropDownOurBusiness } from '@/components/organisms/DropDown/DropDownOurBusiness'
import { InternalRoutes } from '@/routes/routes'

type TMenu = Pick<IButtonMenu, 'link' | 'buttonTitle' | 'children'>

const whoWeAre: TMenu = {
  buttonTitle: 'Quem somos',
  children: <DropDownDefault dropDownDefault="whoWeAre" />,
}

const ourPortals: TMenu = {
  buttonTitle: 'Nossos portais',
  children: <DropDownDefault dropDownDefault="ourPortals" />,
}

const ourBusiness: TMenu = {
  buttonTitle: 'Nossos negócios',
  children: <DropDownOurBusiness />,
}

const followUs: TMenu = {
  buttonTitle: 'Nos siga',
  children: <DropDownFollowUs />,
}

export const menu: TMenu[] = [
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

export const leftMenu = menu.slice(0, 3)

export const rightMenu = menu.slice(3)

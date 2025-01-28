import { THeaderDropDownDefaultProps } from '../HeaderMainDropDownDefault.interface'

const submenu: THeaderDropDownDefaultProps = {
  whoWeAre: {
    title: 'Quem somos',
    submenu: ['Quem somos', 'Nossa história', 'Números', 'Causas que apoiamos'],
  },
  ourPortals: {
    title: 'Nossos portais',
    submenu: ['OLX', 'ZAP', 'Viva Real'],
  },
}

export const headerMainDropDownDefaultProps = {
  submenu,
}

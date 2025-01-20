import { ILinkTab } from '../LinkTab/LinkTab.interface'

export interface INavigationTab {
  title: string
  navigation: ILinkTab[]
}

export interface ITabs {
  navigationList: INavigationTab[]
}

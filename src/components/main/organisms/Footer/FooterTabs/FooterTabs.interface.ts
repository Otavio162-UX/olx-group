import { IFooterLinkTab } from '../FooterLinkTab/FooterLinkTab.interface'

export interface INavigationFooterTab {
  title: string
  navigation: IFooterLinkTab[]
}

export interface IFooterTabs {
  navigationList: INavigationFooterTab[]
}

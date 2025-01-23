import { IFooterMainLinkTab } from '@/components/main/molecules/FooterMain/FooterMainLinkTab/FooterMainLinkTab.interface'

export interface INavigationFooterMainTab {
  title: string
  navigation: IFooterMainLinkTab[]
}

export interface IFooterMainTabs {
  navigationList: INavigationFooterMainTab[]
}

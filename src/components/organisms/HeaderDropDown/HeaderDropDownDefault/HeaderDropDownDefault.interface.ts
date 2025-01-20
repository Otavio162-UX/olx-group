export type TDropDownDefault = 'whoWeAre' | 'ourPortals'

export type THeaderDropDownDefaultProps = {
  [key in TDropDownDefault]: {
    title: string
    submenu: string[]
  }
}

export interface IHeaderDropDownDefault {
  dropDownDefault: TDropDownDefault
}

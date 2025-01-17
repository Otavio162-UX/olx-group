export type TDropDownDefault = 'whoWeAre' | 'ourPortals'

export type TDropDownDefaultProps = {
  [key in TDropDownDefault]: {
    title: string
    submenu: string[]
  }
}

export interface IDropDownDefault {
  dropDownDefault: TDropDownDefault
}

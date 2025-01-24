import { IButtonCollapsible } from '@/components/generic/molecules/ButtonCollapsible/ButtonCollapsible.interface'

export type TObjectVariant<T extends string> = {
  [key in T]: string
}

export type TGlobalSizeVariant = 'small' | 'medium' | 'large'

export type TRootLayoutParams = Readonly<{
  children: React.ReactNode
}>

export type THeaderMenu = Pick<
  IButtonCollapsible,
  'link' | 'buttonTitle' | 'children' | 'iconProps'
>

export interface ICanScrollState {
  left: boolean
  right: boolean
}

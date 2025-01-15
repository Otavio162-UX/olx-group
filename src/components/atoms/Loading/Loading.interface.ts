import { TGlobalSizeVariant } from '@/types/global'

export type TLoadingVariants = 'spinner'

export type TLoadingForComponent = 'buttonLoading'

export type TLoadingSizesVariants = {
  [key in TLoadingForComponent]: {
    [key in TGlobalSizeVariant]: string
  }
}

export interface ILoading {
  variant?: TLoadingVariants
  component?: TLoadingForComponent
  size?: TGlobalSizeVariant
}

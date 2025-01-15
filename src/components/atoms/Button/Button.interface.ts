import { TGlobalSizeVariant } from '@/types/global'
import { ComponentProps, ReactNode } from 'react'

export type TButtonVariants =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'link'
  | 'neutral'
  | 'danger'

export interface IButton extends Omit<ComponentProps<'button'>, 'children'> {
  variant?: TButtonVariants
  size?: TGlobalSizeVariant
  loading?: boolean
  children: ReactNode
}

import { ComponentProps } from 'react'

export type TInputVariants = 'clean' | 'default'

export interface IInput extends ComponentProps<'input'> {
  variant?: TInputVariants
}

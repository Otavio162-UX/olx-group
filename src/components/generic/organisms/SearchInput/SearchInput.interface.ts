import { ChangeEventHandler } from 'react'

export type TSearchInputVariants = 'success' | 'error'

export interface ISearchInput {
  wrapperElementClassName?: string
  iconClassName?: string
  inputClassName?: string
  loadingClassName?: string

  value: string | number | readonly string[]
  onChange: ChangeEventHandler<HTMLInputElement>
  onClick: VoidFunction
  variant?: TSearchInputVariants
  errorMessage?: string | null
  loading?: boolean
  disabled?: boolean
  minLength?: number
  maxLength?: number
}

import { IOptions } from '@/components/generic/atoms/Select/Select.interface'
import { ChangeEventHandler } from 'react'

export interface ISelectFull {
  wrapperElementClassName?: string
  labelClassName?: string
  selectClassName?: string

  label: string
  id: string
  placeholder: string
  options: IOptions[]
  value: string | number | readonly string[]
  onChange: ChangeEventHandler<HTMLSelectElement>
  message: string | null
  required?: boolean
}

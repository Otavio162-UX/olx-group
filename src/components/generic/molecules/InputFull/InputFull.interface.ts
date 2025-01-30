import { ChangeEventHandler } from 'react'

export interface IInputFull {
  wrapperElementClassName?: string
  labelClassName?: string
  inputClassName?: string

  label: string
  id: string
  placeholder: string
  value: string | number | readonly string[]
  onChange: ChangeEventHandler<HTMLInputElement>
  minLength?: number
  maxLength?: number
  message: string | null
  required?: boolean
}

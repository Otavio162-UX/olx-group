import { ComponentProps } from 'react'

export interface IOptions {
  id: string | number
  label: string
}

export interface ISelect extends ComponentProps<'select'> {
  options: IOptions[]
  placeholder: string
}

import { TObjectVariant } from '@/types/global'
import { TButtonColorVariants } from '../ButtonColor.interface'

const classNameVariants: TObjectVariant<TButtonColorVariants> = {
  orange: 'bg-orange-70 hover:bg-orange-70 active:bg-orange-70',
  green: 'bg-green-70 hover:bg-green-70 active:bg-green-70',
}

export const buttonColorProps = {
  classNameVariants,
}

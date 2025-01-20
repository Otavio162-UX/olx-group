import { TObjectVariant } from '@/types/global'
import { TInputVariants } from '../input.interface'

const classNameVariants: TObjectVariant<TInputVariants> = {
  default: '',
  clean:
    'appearance-none flex-1 border-0 bg-transparent placeholder:text-placeholder outline-none text-neutral-130',
}

export const inputProps = {
  classNameVariants,
}

import { TObjectVariant } from '@/types/global'
import { TInputVariants } from '../input.interface'

const classNameVariants: TObjectVariant<TInputVariants> = {
  default:
    'border border-neutral-90 bg-neutral-70 rounded-lg px-4 py-3 text-placeholder placeholder:text-placeholder w-full outline-neutral-90',
  clean:
    'appearance-none flex-1 border-0 bg-transparent placeholder:text-placeholder outline-none text-neutral-130',
}

export const inputProps = {
  classNameVariants,
}

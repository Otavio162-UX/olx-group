import { TObjectVariant } from '@/types/global'
import { twMerge } from 'tailwind-merge'
import { TTitleVariants } from '../Title.interface'

const classNameVariants: TObjectVariant<TTitleVariants> = {
  sectionTitle: twMerge(
    'text-[2rem] text-primary-100 text-center font-ZonaPro',
    'lg:text-5xl'
  ),
}

export const titleProps = {
  classNameVariants,
}

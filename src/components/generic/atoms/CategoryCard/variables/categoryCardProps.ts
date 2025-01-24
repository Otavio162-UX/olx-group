import { TObjectVariant } from '@/types/global'
import { twMerge } from 'tailwind-merge'
import {
  TCategoryTypeVersion,
  TCategoryVariants,
} from '../CategoryCard.interface'

const classNameVariants: TObjectVariant<TCategoryVariants> = {
  orange: 'bg-orange-70',
  'orange-light': 'bg-orange-60',
  green: 'bg-green-70',
}

const versionType: TObjectVariant<TCategoryTypeVersion> = {
  smaller: twMerge(
    'max-w-max text-[.625rem] px-2 py-0.5 rounded-sm text-neutral-120',
    'lg:px-3 lg:py-2 lg:text-sm lg:rounded-lg'
  ),
}

export const categoryCardProps = {
  classNameVariants,
  versionType,
}

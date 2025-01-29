import { TBlogVariants, TObjectVariant } from '@/types/global'
import { twMerge } from 'tailwind-merge'

const blogDefaultImageClassName: TObjectVariant<TBlogVariants> = {
  autos: twMerge(
    'lg:w-[10.4375rem] lg:h-[10.4375rem] absolute top-4 -left-2 rotate-y-180',
    'xl:w-[10.8375rem] xl:h-[10.8375rem] xl:top-3 xl:-left-3',
    '2xl:w-[14.4375rem] 2xl:h-[14.4375rem] 2xl:-top-2 2xl:-left-20'
  ),
  immobile: twMerge(
    'lg:w-[13.4375rem] lg:h-[11.125rem] absolute top-0 -left-16 rotate-y-180',
    'xl:w-[13.4375rem] xl:h-[11.125rem]'
  ),
}

export const postBlogMainImageProps = {
  blogDefaultImageClassName,
}

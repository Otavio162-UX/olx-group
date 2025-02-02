import { TGlobalSizeVariant, TObjectVariant } from '@/types/global'

const spinnerDefaultClassName =
  'border-white border-b-transparent rounded-full inline-block'

export const sizeVariants: TObjectVariant<TGlobalSizeVariant> = {
  small: `w-4 h-4 border-2 ${spinnerDefaultClassName}`,
  medium: `w-6 h-6 border-4 ${spinnerDefaultClassName}`,
  large: `w-8 h-8 border-[.3125rem] ${spinnerDefaultClassName}`,
}

export const loadingProps = {
  sizeVariants,
}

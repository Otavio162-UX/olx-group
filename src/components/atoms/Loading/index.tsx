import { twMerge } from 'tailwind-merge'

import { ILoading } from './Loading.interface'
import { loadingVariantComponents, loadingVariants } from './variables/variants'

const Loading = ({
  variant = 'spinner',
  component = 'buttonLoading',
  size = 'medium',
}: ILoading): JSX.Element => {
  return (
    <div
      className={twMerge(
        loadingVariants[variant],
        loadingVariantComponents[component][size]
      )}
    />
  )
}

export { Loading }

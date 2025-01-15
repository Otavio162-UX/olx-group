import { twMerge } from 'tailwind-merge'
import { ILoading, loadingVariantComponents, loadingVariants } from '.'

import './style.css'

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

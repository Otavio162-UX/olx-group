import { twMerge } from 'tailwind-merge'

import { ILoading } from './Loading.interface'
import { loadingProps } from './variables/loadingProps'

const Loading = ({ size = 'medium', className }: ILoading): JSX.Element => {
  const { sizeVariants } = loadingProps

  return <span className={twMerge('spinner', sizeVariants[size], className)} />
}

export { Loading }

import { Loading } from '@/components/generic/atoms/Loading'
import { twMerge } from 'tailwind-merge'
import { ILoadingContainer } from './LoadingContainer.interface'

const LoadingContainer = ({
  wrapperElementClassName,
  loadingSize = 'medium',
  loadingClassName,
}: ILoadingContainer): JSX.Element => {
  return (
    <div
      className={twMerge(
        'w-full flex items-center justify-center',
        wrapperElementClassName
      )}
    >
      <Loading
        size={loadingSize}
        className={twMerge(
          'border-primary-100 border-b-transparent',
          loadingClassName
        )}
      />
    </div>
  )
}

export { LoadingContainer }

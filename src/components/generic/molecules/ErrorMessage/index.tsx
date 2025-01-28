import { Text } from '@/components/generic/atoms/Text'
import { mdiCloseCircleOutline } from '@mdi/js'
import Icon from '@mdi/react'
import { twMerge } from 'tailwind-merge'
import { IErrorMessage } from './ErrorMessage.interface'

const ErrorMessage = ({
  wrapperElementClassName,
  message,
}: IErrorMessage): JSX.Element | null => {
  if (!message) return null

  return (
    <div className={twMerge('flex gap-1', wrapperElementClassName)}>
      <Icon
        path={mdiCloseCircleOutline}
        size={'1rem'}
        className="text-danger-100"
      />

      <Text tag="span" className="text-xs text-danger-100">
        {message}
      </Text>
    </div>
  )
}

export { ErrorMessage }

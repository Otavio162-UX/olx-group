import { Text } from '@/components/generic/atoms/Text'
import { mdiCloseCircleOutline } from '@mdi/js'
import Icon from '@mdi/react'
import { IErrorMessage } from './ErrorMessage.interface'

const ErrorMessage = ({ message }: IErrorMessage): JSX.Element => {
  return (
    <div className="flex gap-1">
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

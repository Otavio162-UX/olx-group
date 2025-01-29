import { twMerge } from 'tailwind-merge'
import { TText } from './Text.interface'

const Text = ({
  tag: Tag = 'p',
  className,
  children,
  ...props
}: TText): JSX.Element => {
  return (
    <Tag className={twMerge('font-normal ', className)} {...props}>
      {children}
    </Tag>
  )
}

export { Text }

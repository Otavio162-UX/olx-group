import { twMerge } from 'tailwind-merge'
import { IText } from './Text.interface'
import { textVariants } from './variables/variants'

const Text = ({
  variant = 'large',
  className,
  children,
  ...props
}: IText): JSX.Element => {
  return (
    <p
      className={twMerge('font-normal ', textVariants[variant], className)}
      {...props}
    >
      {children}
    </p>
  )
}

export { Text }

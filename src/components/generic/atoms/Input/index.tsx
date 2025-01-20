import { twMerge } from 'tailwind-merge'
import { IInput } from './input.interface'
import { inputProps } from './variables/inputProps'

const Input = ({
  type = 'text',
  variant = 'default',
  className,
  ...props
}: IInput): JSX.Element => {
  const { classNameVariants } = inputProps

  return (
    <input
      type={type}
      className={twMerge(classNameVariants[variant], className)}
      {...props}
    />
  )
}

export { Input }

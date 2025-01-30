import { twMerge } from 'tailwind-merge'
import { ILabel } from './Label.interface'

const Label = ({ className, id, children, ...rest }: ILabel): JSX.Element => {
  return (
    <label
      htmlFor={id}
      className={twMerge('text-base text-neutral-100', className)}
      {...rest}
    >
      {children}
    </label>
  )
}

export { Label }

import { twMerge } from 'tailwind-merge'
import { TTitle } from './Title.interface'
import { titleProps } from './variables/titleProps'

const Title = ({
  tag: Tag = 'h1',
  variant,
  className,
  children,
  ...props
}: TTitle) => {
  const { classNameVariants } = titleProps

  return (
    <Tag
      className={twMerge(
        'font-bold',
        variant && classNameVariants[variant],
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}

export { Title }

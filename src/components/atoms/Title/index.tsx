import { twMerge } from 'tailwind-merge'
import { TTitle } from './Title.interface'
import { titleVariants } from './variables/variants'

const Title = ({ tag: Tag = 'h1', className, children, ...props }: TTitle) => {
  return (
    <Tag
      className={twMerge('font-bold', titleVariants[Tag], className)}
      {...props}
    >
      {children}
    </Tag>
  )
}

export { Title }

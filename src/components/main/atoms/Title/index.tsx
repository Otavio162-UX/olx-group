import { twMerge } from 'tailwind-merge'
import { TTitle } from './Title.interface'

const Title = ({ tag: Tag = 'h1', className, children, ...props }: TTitle) => {
  return (
    <Tag className={twMerge('font-bold', className)} {...props}>
      {children}
    </Tag>
  )
}

export { Title }

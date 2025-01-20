import { HeaderBlog } from '@/components/blog/templates/HeaderBlog'
import { TRootLayoutParams } from '@/types/global'

const LayoutBlog = ({ children }: TRootLayoutParams): JSX.Element => {
  return (
    <>
      <HeaderBlog />
      {children}
    </>
  )
}

export default LayoutBlog

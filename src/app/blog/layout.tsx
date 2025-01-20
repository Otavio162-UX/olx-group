import { Header } from '@/components/blog/templates/Header'
import { TRootLayoutParams } from '@/types/global'

const LayoutBlog = ({ children }: TRootLayoutParams): JSX.Element => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default LayoutBlog

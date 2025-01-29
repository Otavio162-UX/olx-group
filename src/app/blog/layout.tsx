import { FooterBlog } from '@/components/blog/templates/FooterBlog'
import { HeaderBlog } from '@/components/blog/templates/HeaderBlog'
import { TRootLayoutParams } from '@/types/global'

const LayoutBlog = async ({
  children,
}: TRootLayoutParams): Promise<JSX.Element> => {
  return (
    <>
      <HeaderBlog />
      {children}
      <FooterBlog />
    </>
  )
}

export default LayoutBlog

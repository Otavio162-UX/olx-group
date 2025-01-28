import { FooterBlog } from '@/components/blog/templates/FooterBlog'
import { HeaderBlog } from '@/components/blog/templates/HeaderBlog'
import { TRootLayoutParams } from '@/types/global'
import { Suspense } from 'react'

const LayoutBlog = async ({
  children,
}: TRootLayoutParams): Promise<JSX.Element> => {
  return (
    <Suspense>
      <HeaderBlog />
      {children}
      <FooterBlog />
    </Suspense>
  )
}

export default LayoutBlog

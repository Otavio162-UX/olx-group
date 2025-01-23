import { Title } from '@/components/generic/atoms/Title'
import { IFooterBlogTitle } from './FooterBlogTitle.interface'

const FooterBlogTitle = ({ children }: IFooterBlogTitle) => {
  return (
    <Title tag="h6" className="text-base font-semibold text-primary-100">
      {children}
    </Title>
  )
}

export { FooterBlogTitle }

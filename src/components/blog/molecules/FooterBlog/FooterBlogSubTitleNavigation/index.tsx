import { Title } from '@/components/generic/atoms/Title'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { IFooterBlogSubTitleNavigation } from './FooterBlogSubTitleNavigation.interface'

const FooterBlogSubTitleNavigation = ({
  link,
  children,
  titleClassName,
}: IFooterBlogSubTitleNavigation) => {
  return (
    <Link href={link}>
      <Title
        tag="h6"
        className={twMerge('text-sm font-semibold', titleClassName)}
      >
        {children}
      </Title>
    </Link>
  )
}

export { FooterBlogSubTitleNavigation }

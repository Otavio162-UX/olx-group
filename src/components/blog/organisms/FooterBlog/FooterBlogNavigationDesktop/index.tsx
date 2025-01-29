'use client'

import { FooterBlogTitle } from '@/components/blog/atoms/FooterBlog/FooterBlogTitle'
import { FooterBlogSubTitleNavigation } from '@/components/blog/molecules/FooterBlog/FooterBlogSubTitleNavigation'
import { useGetBlogFooterCategoryNavigation } from '@/components/blog/templates/FooterBlog/hooks/useGetBlogFooterCategoryNavigation'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

const FooterBlogNavigationDesktop = (): JSX.Element => {
  const footerBlogNavigation = useGetBlogFooterCategoryNavigation()

  return (
    <div className={twMerge('hidden', 'lg:flex lg:gap-12')}>
      {footerBlogNavigation.map((item, indexItem) => (
        <div
          key={`footer-blog-link-${indexItem}`}
          className="flex flex-col gap-3"
        >
          {item.link ? (
            <Link href={item.link}>
              <FooterBlogTitle>{item.title}</FooterBlogTitle>
            </Link>
          ) : (
            <FooterBlogTitle>{item.title}</FooterBlogTitle>
          )}

          <div className="flex flex-col gap-3">
            {item.submenu.map((subItem, indexSubItem) => (
              <FooterBlogSubTitleNavigation
                link={subItem.link}
                key={`link-${indexItem}-${indexSubItem}`}
              >
                {subItem.title}
              </FooterBlogSubTitleNavigation>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export { FooterBlogNavigationDesktop }

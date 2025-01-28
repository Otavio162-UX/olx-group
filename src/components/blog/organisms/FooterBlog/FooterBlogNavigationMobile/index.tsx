'use client'

import { FooterBlogSubTitleNavigation } from '@/components/blog/molecules/FooterBlog/FooterBlogSubTitleNavigation'
import { useGetBlogFooterCategoryNavigation } from '@/components/blog/templates/FooterBlog/hooks/useGetBlogFooterCategoryNavigation'
import { ButtonCollapsible } from '@/components/generic/molecules/ButtonCollapsible'
import { twMerge } from 'tailwind-merge'

const FooterBlogNavigationMobile = (): JSX.Element => {
  const footerBlogNavigation = useGetBlogFooterCategoryNavigation()

  return (
    <div className={twMerge('block', 'lg:hidden')}>
      {footerBlogNavigation.map((item, indexItem) => (
        <ButtonCollapsible
          key={`button-collapsed-${indexItem}`}
          buttonTitle={item.title}
          iconProps={{
            show: item.submenu.length > 0,
            iconClassName: 'text-neutral-130',
          }}
          link={item.link}
          buttonClassName="text-neutral-130 bg-neutral-70 px-0"
        >
          <div>
            {item.submenu.map((subItem, indexSubItem) => (
              <FooterBlogSubTitleNavigation
                link={subItem.link}
                key={`link-${indexItem}-${indexSubItem}`}
                titleClassName="px-6 py-2"
              >
                {subItem.title}
              </FooterBlogSubTitleNavigation>
            ))}
          </div>
        </ButtonCollapsible>
      ))}
    </div>
  )
}

export { FooterBlogNavigationMobile }

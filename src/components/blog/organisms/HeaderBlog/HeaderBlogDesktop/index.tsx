import { HeaderBlogSearchInput } from '@/components/blog/molecules/HeaderBlog/HeaderBlogSearchInput'
import { headerBlogMenu } from '@/components/blog/templates/HeaderBlog/arrays/headerBlogProps'
import { ButtonCollapsible } from '@/components/generic/molecules/ButtonCollapsible'
import { twMerge } from 'tailwind-merge'

const HeaderBlogDesktop = (): JSX.Element => {
  return (
    <nav className={twMerge('hidden', 'lg:flex lg:items-center lg:gap-8')}>
      <HeaderBlogSearchInput />

      <div className="flex items-center gap-4">
        {headerBlogMenu.map((item, indexItem) => (
          <ButtonCollapsible
            key={`button-desktop-menu-${indexItem}`}
            buttonTitle={item.buttonTitle}
            link={item.link}
          >
            {item.children}
          </ButtonCollapsible>
        ))}
      </div>
    </nav>
  )
}

export { HeaderBlogDesktop }

import { HeaderBlogLogo } from '@/components/blog/atoms/HeaderBlog/HeaderBlogLogo'
import { HeaderBlogDesktop } from '@/components/blog/organisms/HeaderBlog/HeaderBlogDesktop'
import { HeaderBlogMobile } from '@/components/blog/organisms/HeaderBlog/HeaderBlogMobile'
import { twMerge } from 'tailwind-merge'

const HeaderBlog = (): JSX.Element => {
  return (
    <header className={twMerge('sticky top-0 z-10 bg-neutral-70', 'lg:static')}>
      <div className="relative">
        <nav className="wrapperContainer max-w-container1328 flex items-center justify-between h-[4.5rem]">
          <HeaderBlogLogo />

          <HeaderBlogDesktop />

          <HeaderBlogMobile />
        </nav>
      </div>
    </header>
  )
}

export { HeaderBlog }

import { HeaderBlogLogo } from '@/components/blog/atoms/HeaderBlog/HeaderBlogLogo'
import { HeaderBlogDesktop } from '@/components/blog/organisms/HeaderBlog/HeaderBlogDesktop'
import { HeaderBlogMobile } from '@/components/blog/organisms/HeaderBlog/HeaderBlogMobile'

const HeaderBlog = (): JSX.Element => {
  return (
    <header className="relative">
      <nav className="wrapperContainer max-w-container1328 flex items-center justify-between h-[4.5rem]">
        <HeaderBlogLogo />

        <HeaderBlogDesktop />

        <HeaderBlogMobile />
      </nav>
    </header>
  )
}

export { HeaderBlog }

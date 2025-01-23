import { FooterBlogLogo } from '@/components/blog/atoms/FooterBlog/FooterBlogLogo'
import { FooterBlogLinks } from '@/components/blog/organisms/FooterBlog/FooterBlogLinks'
import { FooterBlogNavigationDesktop } from '@/components/blog/organisms/FooterBlog/FooterBlogNavigationDesktop'
import { FooterBlogNavigationMobile } from '@/components/blog/organisms/FooterBlog/FooterBlogNavigationMobile'
import { twMerge } from 'tailwind-merge'

const FooterBlog = (): JSX.Element => {
  return (
    <footer
      className={twMerge(
        'mt-auto flex flex-col pt-9 wrapperContainer',
        'lg:pt-[4.875rem] lg:pb-4 lg:max-w-container1328 lg:gap-6 lg:px-2'
      )}
    >
      <div className={twMerge('flex flex-col', 'lg:flex-row lg:gap-12')}>
        <FooterBlogLogo />

        <FooterBlogNavigationMobile />

        <FooterBlogNavigationDesktop />
      </div>

      <FooterBlogLinks />
    </footer>
  )
}

export { FooterBlog }

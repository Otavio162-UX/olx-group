import { ImageComponent } from '@/components/generic/atoms/ImageComponent'
import { HeaderBlogDesktop } from '../../organisms/HeaderBlog/HeaderBlogDesktop'

const HeaderBlog = (): JSX.Element => {
  return (
    <header className="wrapperContainer max-w-container1328 flex items-center justify-between h-[4.5rem]">
      <ImageComponent
        src="/blog/logos/logo-group.svg"
        alt="olx-group-logo"
        width={252}
        height={24}
        className="w-[15.75rem] h-6 object-cover"
      />

      <HeaderBlogDesktop />
    </header>
  )
}

export { HeaderBlog }

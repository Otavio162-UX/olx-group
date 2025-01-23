import { ImageComponent } from '@/components/generic/atoms/ImageComponent'

const HeaderBlogLogo = (): JSX.Element => {
  return (
    <ImageComponent
      src="/blog/logos/logo-group.svg"
      alt="olx-group-logo"
      width={252}
      height={24}
      className="w-[15.75rem] h-6 object-cover"
    />
  )
}

export { HeaderBlogLogo }

import Icon from '@mdi/react'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { IPostBlogSocialMedia } from './PostBlogSocialMedia.interface'

const PostBlogSocialMedia = ({
  link,
  path,
  iconClassName,
}: IPostBlogSocialMedia): JSX.Element => {
  return (
    <Link href={link} target="_blank">
      <div className="w-8 h-8 bg-theme-blog-color-60 rounded-full flex items-center justify-center">
        <Icon
          path={path}
          size={'1.125rem'}
          className={twMerge(
            'text-theme-blog-post-social-media-icon-color',
            iconClassName
          )}
        />
      </div>
    </Link>
  )
}

export { PostBlogSocialMedia }

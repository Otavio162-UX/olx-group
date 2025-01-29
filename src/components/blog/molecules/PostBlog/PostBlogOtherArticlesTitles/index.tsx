import { Title } from '@/components/generic/atoms/Title'
import { twMerge } from 'tailwind-merge'
import { IPostBlogOtherArticlesTitles } from './PostBlogOtherArticlesTitles.interface'

const PostBlogOtherArticlesTitles = ({
  highlightText,
  title,
}: IPostBlogOtherArticlesTitles): JSX.Element => {
  return (
    <div className={twMerge('flex flex-col gap-2', 'lg:gap-4')}>
      <Title
        tag="h4"
        className={twMerge(
          'text-center text-xl text-theme-blog-secondary-color-100',
          'lg:text-2xl'
        )}
      >
        {highlightText}
      </Title>

      <Title
        tag="h2"
        className={twMerge(
          'text-center text-[2rem] font-ZonaPro text-neutral-130',
          'lg:text-[2.5rem]'
        )}
      >
        {title}
      </Title>
    </div>
  )
}

export { PostBlogOtherArticlesTitles }

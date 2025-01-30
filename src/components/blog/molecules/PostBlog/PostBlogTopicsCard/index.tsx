import { PostBlogIntroTitle } from '@/components/blog/atoms/PostBlog/PostBlogIntroTitle'
import { Button } from '@/components/generic/atoms/Button'
import { Text } from '@/components/generic/atoms/Text'
import { twMerge } from 'tailwind-merge'
import { IPostBlogTopicsCard } from './PostBlogTopicsCard.interface'
import { goToIndexPost } from './functions/goToIndexPost'

const PostBlogTopicsCard = ({
  title,
  subtitle,
  topics,
}: IPostBlogTopicsCard): JSX.Element => {
  return (
    <div className="w-full max-w-[35rem] px-6 py-8 border-8 border-theme-blog-secondary-color-70 rounded-lg flex flex-col gap-4">
      <PostBlogIntroTitle
        className={twMerge(
          'text-xl text-theme-blog-secondary-color-100 font-ZonaPro',
          'lg:text-2xl'
        )}
      >
        {title}
      </PostBlogIntroTitle>

      <div className="flex flex-col gap-3">
        <Text
          tag="p"
          className={twMerge(
            'text-base font-bold text-neutral-130',
            'lg:text-lg'
          )}
        >
          {subtitle}
        </Text>

        {topics.map((topic, indexTopic) => (
          <Button
            key={`card-with-topic-${indexTopic}`}
            variant="clean"
            className={twMerge(
              'text-base font-bold text-neutral-130 px-0 py-0 flex max-w-max justify-start rounded-none',
              'lg:text-lg'
            )}
            onClick={() => goToIndexPost({ indexTopic })}
          >
            {topic.text}
          </Button>
        ))}
      </div>
    </div>
  )
}

export { PostBlogTopicsCard }

import { PostBlogIntroTitle } from '@/components/blog/atoms/PostBlog/PostBlogIntroTitle'
import { IPostBlogIntroTitle } from '@/components/blog/atoms/PostBlog/PostBlogIntroTitle/PostBlogIntroTitle.interface'
import { PostBlogTextItalicWithBorder } from '@/components/blog/atoms/PostBlog/PostBlogTextItalicWithBorder'
import { IPostBlogTextItalicWithBorder } from '@/components/blog/atoms/PostBlog/PostBlogTextItalicWithBorder/PostBlogTextItalicWithBorder.interface'
import { PostBlogFigure } from '@/components/blog/molecules/PostBlog/PostBlogFigure'
import { IPostBlogFigure } from '@/components/blog/molecules/PostBlog/PostBlogFigure/PostBlogFigure.interface'
import { PostBlogTopicsCard } from '@/components/blog/molecules/PostBlog/PostBlogTopicsCard'
import { IPostBlogTopicsCard } from '@/components/blog/molecules/PostBlog/PostBlogTopicsCard/PostBlogTopicsCard.interface'
import { Text } from '@/components/generic/atoms/Text'
import { TText } from '@/components/generic/atoms/Text/Text.interface'
import { twMerge } from 'tailwind-merge'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TArticlesComponents<T = any> = {
  'big-title': (props: T) => JSX.Element
  'medium-title': (props: Pick<TText, 'children'>) => JSX.Element
  'default-bold-text': (props: Pick<TText, 'children'>) => JSX.Element
  'default-normal-text': (props: Pick<TText, 'children'>) => JSX.Element
  topics: (props: IPostBlogTopicsCard) => JSX.Element
  figure: (props: IPostBlogFigure) => JSX.Element
  'italic-with-border': (props: IPostBlogTextItalicWithBorder) => JSX.Element
}

const articlesComponents: TArticlesComponents = {
  'big-title': ({ children }: IPostBlogIntroTitle) => (
    <PostBlogIntroTitle>{children}</PostBlogIntroTitle>
  ),
  'medium-title': ({ children }: IPostBlogIntroTitle) => (
    <PostBlogIntroTitle className={twMerge('text-xl', 'lg:text-2xl')}>
      {children}
    </PostBlogIntroTitle>
  ),
  'default-bold-text': ({ children }) => (
    <Text
      tag="p"
      className={twMerge('text-neutral-100 font-bold', 'lg:text-lg')}
    >
      {children}
    </Text>
  ),
  'default-normal-text': ({ children }) => (
    <Text
      tag="p"
      className={twMerge('text-base text-neutral-100', 'lg:text-lg')}
    >
      {children}
    </Text>
  ),
  topics: (props) => <PostBlogTopicsCard {...props} />,
  figure: (props) => <PostBlogFigure {...props} />,
  'italic-with-border': ({ children }) => (
    <PostBlogTextItalicWithBorder>{children}</PostBlogTextItalicWithBorder>
  ),
}

export const postBlogInfoProps = {
  articlesComponents,
}

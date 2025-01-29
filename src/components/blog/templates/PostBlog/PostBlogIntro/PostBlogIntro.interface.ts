import { IPostBlogIntroTitle } from '@/components/blog/atoms/PostBlog/PostBlogIntroTitle/PostBlogIntroTitle.interface'
import { IPostBlogTextItalicWithBorder } from '@/components/blog/atoms/PostBlog/PostBlogTextItalicWithBorder/PostBlogTextItalicWithBorder.interface'
import { IPostBlogFigure } from '@/components/blog/molecules/PostBlog/PostBlogFigure/PostBlogFigure.interface'
import { IPostBlogTopicsCard } from '@/components/blog/molecules/PostBlog/PostBlogTopicsCard/PostBlogTopicsCard.interface'
import { IBlogArticleCard } from '@/components/blog/organisms/BlogArticleCard/BlogArticleCard.interface'
import { IBlogEbookCard } from '@/components/blog/organisms/BlogEbookCard/BlogEbookCard.interface'
import { TText } from '@/components/generic/atoms/Text/Text.interface'

export type TPostBlogIntro =
  | ({
      type: 'big-title'
    } & IPostBlogIntroTitle)
  | ({
      type: 'medium-title'
    } & IPostBlogIntroTitle)
  | ({
      type: 'default-bold-text'
    } & Pick<TText, 'children'>)
  | ({
      children: string
      type: 'default-normal-text'
    } & Pick<TText, 'children'>)
  | ({
      type: 'topics'
    } & IPostBlogTopicsCard)
  | ({
      type: 'figure'
    } & IPostBlogFigure)
  | ({
      type: 'italic-with-border'
    } & IPostBlogTextItalicWithBorder)

export interface IPostBlogIntro {
  articleDetails: TPostBlogIntro[][]
  otherArticles: IBlogArticleCard[]
  otherEbooks: IBlogEbookCard[]
}

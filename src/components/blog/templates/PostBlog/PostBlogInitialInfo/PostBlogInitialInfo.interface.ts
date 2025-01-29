import { IPostBlogSocialMedia } from '@/components/blog/molecules/PostBlog/PostBlogSocialMedia/PostBlogSocialMedia.interface'

export interface IPostBlogInitialInfo {
  title: string
  team: string
  date: string
  readTime: string
  subtitle: string
  postSocialMedia: IPostBlogSocialMedia[]
  categoriesTags: string[]
  tailwindBackgroundImageClassName: string
}

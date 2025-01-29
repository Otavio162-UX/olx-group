import { IPostBlogSocialMedia } from '@/components/blog/molecules/PostBlog/PostBlogSocialMedia/PostBlogSocialMedia.interface'

export interface IPostBlogMainImageContainer {
  tailwindBackgroundImageClassName: string
  categoriesTags: string[]
  postSocialMedia: IPostBlogSocialMedia[]
}

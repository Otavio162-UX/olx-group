import { BlogCategoryType } from '@/enum/categoriesType'
import { TBlogVariants } from '@/types/global'

export const InternalRoutes = {
  HOME: '/',
  MEDIA: '/media',
  CAREERS: '/careers',
  AUTOS: '/autos',
  IMMOBILE: '/immobile',
  EVENTS: '/events',
  CONSUMER_GOODS: '/consumerGoods',
  ADVERTISING: '/advertising',
  WHO_WE_ARE: '/whoWeAre',

  // blog
  BLOG: '/blog',
  BLOG_AUTOS: '/blog/autos',
  BLOG_IMMOBILE: '/blog/immobile',

  // blog generic routes
  BLOG_POST: (blogType: TBlogVariants, postId: string | number): string =>
    `/blog/${blogType}/post/${postId}`,
  BLOG_CATEGORY_TYPE: (
    blogType: TBlogVariants,
    categoryType: BlogCategoryType
  ): string => `/blog/${blogType}/categories/${categoryType}`,
  BLOG_MORE_READ: (blogType: TBlogVariants): string =>
    `/blog/${blogType}/moreRead`,
  BLOG_SEARCH: (blogType: TBlogVariants, search?: string): string =>
    `/blog/${blogType}/search${search ? `?${search}` : ''}`,
  BLOG_RICH_MATERIALS_E_BOOK: (
    blogType: TBlogVariants,
    ebookId: string
  ): string => `/blog/${blogType}/richMaterials/${ebookId}`,

  // privacy policy
  PRIVACY_POLICY: '/privacy-policy',
}

export const ExternalRoutes = {
  TWITTER: 'https://x.com/olx_Brasil',
  LINKEDIN: 'https://www.linkedin.com/company/grupoolx/',
  INSTAGRAM: 'https://www.instagram.com/olxbrasil/',
  FACEBOOK: 'https://www.facebook.com/olxbrasil',
  YOUTUBE: 'https://www.youtube.com/user/OLXBrasil',
  TIKTOK: 'https://www.tiktok.com/@olx_brasil',
  'OLX_E-COMMERCE': 'https://www.olx.com.br/',
  ZAP_SITE: 'https://www.zapimoveis.com.br/',
  VIVA_REAL_SITE: 'https://www.vivareal.com.br/',
}

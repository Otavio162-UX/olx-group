import { IHomeBlogMainGalleryCard } from '../HomeBlogMainGalleryCard/HomeBlogMainGalleryCard.interface'

export type THomeBlogSmallGalleryCard = Omit<
  IHomeBlogMainGalleryCard,
  'readTime' | 'newsDescription'
>

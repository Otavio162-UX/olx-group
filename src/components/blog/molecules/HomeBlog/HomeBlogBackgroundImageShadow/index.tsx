import { ImageComponent } from '@/components/generic/atoms/ImageComponent'
import { twMerge } from 'tailwind-merge'
import { IHomeBlogBackgroundImageShadow } from './HomeBlogBackgroundImageShadow.interface'

const HomeBlogBackgroundImageShadow = ({
  imageClassName,
  shadowElementClassName,
  imageSrc,
}: IHomeBlogBackgroundImageShadow): JSX.Element => {
  return (
    <>
      <ImageComponent
        src={imageSrc}
        alt={'image-secondary-news'}
        width={400}
        height={272}
        className={twMerge(
          'w-full h-full object-cover absolute top-0 left-0 -z-10',
          imageClassName
        )}
      />

      <div
        className={twMerge(
          'bg-gradient-to-t from-[#00000080] to-[#00000000] absolute top-0 left-0 w-full h-full -z-[9]',
          shadowElementClassName
        )}
      />
    </>
  )
}

export { HomeBlogBackgroundImageShadow }

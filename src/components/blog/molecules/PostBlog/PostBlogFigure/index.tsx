import { ImageComponent } from '@/components/generic/atoms/ImageComponent'
import { twMerge } from 'tailwind-merge'
import { IPostBlogFigure } from './PostBlogFigure.interface'

const PostBlogFigure = ({
  imageUrl,
  altImage,
  figureCaption,
}: IPostBlogFigure): JSX.Element => {
  return (
    <figure className={twMerge('py-4 flex flex-col gap-2', 'lg:py-12')}>
      <ImageComponent
        src={imageUrl}
        alt={altImage}
        width={350}
        height={250}
        className={twMerge(
          'w-[21.875rem] h-[15.625rem] object-cover',
          'lg:w-[52rem] lg:h-[30rem]'
        )}
      />
      <figcaption
        className={twMerge('text-lg pl-2 border-l-4 border-neutral-130')}
      >
        {figureCaption}
      </figcaption>
    </figure>
  )
}

export { PostBlogFigure }

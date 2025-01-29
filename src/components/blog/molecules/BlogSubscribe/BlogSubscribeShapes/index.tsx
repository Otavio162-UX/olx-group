import { BlogSubscribeCircleImage } from '@/components/blog/atoms/BlogSubscribe/BlogSubscribeCircleImage'
import { ImageComponent } from '@/components/generic/atoms/ImageComponent'
import { twMerge } from 'tailwind-merge'

const BlogSubscribeShapes = (): JSX.Element => {
  return (
    <div className={twMerge('hidden', 'lg:block')}>
      <ImageComponent
        src="/blog/home/subscribeShape.svg"
        alt="subscribe-shape"
        width={340}
        height={973}
        className="w-[21.25rem] h-[60.8125rem] -z-[1] absolute -top-[7%] -left-[6.875rem]"
      />

      <BlogSubscribeCircleImage />
    </div>
  )
}

export { BlogSubscribeShapes }

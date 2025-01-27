import { HomeBlogSubscribeCircleImage } from '@/components/blog/atoms/HomeBlog/HomeBlogSubscribeCircleImage'
import { ImageComponent } from '@/components/generic/atoms/ImageComponent'
import { twMerge } from 'tailwind-merge'

const HomeBlogSubscribeShapes = (): JSX.Element => {
  return (
    <div className={twMerge('hidden', 'lg:block')}>
      <ImageComponent
        src="/blog/home/subscribeShape.svg"
        alt="subscribe-shape"
        width={340}
        height={973}
        className="w-[21.25rem] h-[60.8125rem] absolute -top-[7%] -left-[6.875rem]"
      />

      <HomeBlogSubscribeCircleImage />
    </div>
  )
}

export { HomeBlogSubscribeShapes }

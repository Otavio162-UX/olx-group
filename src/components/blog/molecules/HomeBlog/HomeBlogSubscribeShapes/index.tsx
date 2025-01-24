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
      <ImageComponent
        src="/blog/home/subscribeCircle.svg"
        alt="subscribe-shape"
        width={768}
        height={764}
        className="w-[48rem] h-[47.75rem] absolute -top-[0%] -right-[6.875rem]"
      />
    </div>
  )
}

export { HomeBlogSubscribeShapes }

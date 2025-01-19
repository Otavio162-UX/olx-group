import Image from 'next/image'
import { IImageComponent } from './ImageComponent.interface'

const ImageComponent = ({
  src,
  alt,
  width,
  height,
  className,
}: IImageComponent): JSX.Element => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority
      className={className}
    />
  )
}

export { ImageComponent }

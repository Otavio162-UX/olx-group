import Image from 'next/image'
import { IImageComponent } from '.'

const ImageComponent = ({
  src,
  alt,
  className,
}: IImageComponent): JSX.Element => {
  return (
    <Image
      src={src}
      alt={alt}
      width={40}
      height={40}
      priority
      className={className}
    />
  )
}

export { ImageComponent }

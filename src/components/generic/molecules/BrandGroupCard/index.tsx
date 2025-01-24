import { ImageComponent } from '@/components/generic/atoms/ImageComponent'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { IBrandGroupCard } from './BrandGroupCard.interface'

const BrandGroupCard = ({
  src,
  alt,
  className,
  link,
}: IBrandGroupCard): JSX.Element => {
  return (
    <Link href={link} target="_blank">
      <div
        className={twMerge(
          'w-full max-w-[25rem] min-w-[20rem] flex-1 mx-auto rounded-2xl border-4 border-primary-70 h-[6.75rem] flex items-center justify-center shadow-[0px_12px_16px_#1a1d2316]',
          'lg:h-[8.625rem]'
        )}
      >
        <ImageComponent
          src={src}
          alt={alt}
          width={162}
          height={108}
          className={className}
        />
      </div>
    </Link>
  )
}

export { BrandGroupCard }

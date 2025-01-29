import { ImageComponent } from '@/components/generic/atoms/ImageComponent'
import { Text } from '@/components/generic/atoms/Text'
import { Title } from '@/components/generic/atoms/Title'
import { mdiChevronRight } from '@mdi/js'
import Icon from '@mdi/react'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { IHomeMainBusinessFrontGridCard } from './HomeMainBusinessFrontGridCard.interface'

const HomeMainBusinessFrontGridCard = ({
  src,
  alt,
  title,
  description,
  link,
}: IHomeMainBusinessFrontGridCard): JSX.Element => {
  return (
    <div
      className={twMerge(
        'w-full flex flex-col flex-1 rounded-3xl border border-neutral-light overflow-hidden'
      )}
    >
      <ImageComponent
        src={src}
        alt={alt}
        width={358}
        height={170}
        className={twMerge(
          'w-full h-[10.625rem] object-cover',
          'lg:h-[17.625rem]'
        )}
      />

      <div className="flex-1 flex items-center justify-between bg-primary-100 p-8 gap-4">
        <div
          className={twMerge(
            'flex flex-col gap-2 max-w-[14.875rem]',
            'lg:max-w-full'
          )}
        >
          <Title
            tag="h3"
            className={twMerge(
              'text-neutral-70 font-ZonaPro text-2xl',
              'lg:text-[2rem]'
            )}
          >
            {title}
          </Title>

          <Text
            tag="p"
            className={twMerge('text-base text-neutral-70', 'lg:text-lg')}
          >
            {description}
          </Text>
        </div>

        <Link href={link} className="py-6">
          <Icon path={mdiChevronRight} size={1.5} className="text-neutral-70" />
        </Link>
      </div>
    </div>
  )
}

export { HomeMainBusinessFrontGridCard }

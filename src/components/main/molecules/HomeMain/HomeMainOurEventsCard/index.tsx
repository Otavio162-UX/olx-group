import { ImageComponent } from '@/components/generic/atoms/ImageComponent'
import { Text } from '@/components/generic/atoms/Text'
import { Title } from '@/components/generic/atoms/Title'
import { mdiChevronRight } from '@mdi/js'
import Icon from '@mdi/react'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { IHomeMainOurEventsCard } from './HomeMainOurEventsCard.interface'

const HomeMainOurEventsCard = ({
  title,
  description,
  link,
  src,
  alt,
}: IHomeMainOurEventsCard): JSX.Element => {
  return (
    <div
      className={twMerge(
        'w-full flex flex-col flex-1 rounded-3xl border border-neutral-light overflow-hidden',
        'md:flex-row-reverse'
      )}
    >
      <div
        className={twMerge(
          'flex-1 flex items-center justify-between bg-primary-100 p-8 gap-4',
          'md:py-6',
          'lg:py-12'
        )}
      >
        <div className={twMerge('flex flex-col gap-2', 'md:max-w-full')}>
          <Title
            tag="h3"
            className={twMerge(
              'text-neutral-70 font-ZonaPro text-2xl',
              'md:text-[2rem]'
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

        <Link href={link} className="py-2">
          <Icon path={mdiChevronRight} size={1.5} className="text-neutral-70" />
        </Link>
      </div>

      <ImageComponent
        src={src}
        alt={alt}
        width={358}
        height={170}
        className={twMerge(
          'w-full h-[10.625rem] object-cover',
          'md:flex-1',
          'lg:h-[10.8125rem] lg:max-w-[29.75rem]'
        )}
      />
    </div>
  )
}

export { HomeMainOurEventsCard }

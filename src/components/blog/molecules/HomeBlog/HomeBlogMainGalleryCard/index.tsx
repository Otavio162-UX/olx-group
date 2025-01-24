import { Button } from '@/components/generic/atoms/Button'
import { ButtonColor } from '@/components/generic/atoms/ButtonColor'
import { Text } from '@/components/generic/atoms/Text'
import { Title } from '@/components/generic/atoms/Title'
import { mdiArrowRight } from '@mdi/js'
import Icon from '@mdi/react'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { HomeBlogBackgroundImageShadow } from '../HomeBlogBackgroundImageShadow'
import { IHomeBlogMainGalleryCard } from './HomeBlogMainGalleryCard.interface'

const HomeBlogMainGalleryCard = ({
  link,
  imageSrc,
  buttonNewsCategory,
  readTime,
  newsTitle,
  newsDescription,
}: IHomeBlogMainGalleryCard): JSX.Element => {
  return (
    <Link href={link}>
      <div className="w-full rounded-2xl h-full overflow-hidden relative flex px-10 py-8">
        <HomeBlogBackgroundImageShadow
          shadowElementClassName="to-[#00000032]"
          imageSrc={imageSrc}
        />

        <div
          className={twMerge(
            'mt-auto flex items-end justify-between w-full gap-4',
            'lg:gap-2',
            'xl:gap-4'
          )}
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <ButtonColor variant="orange">{buttonNewsCategory}</ButtonColor>
              <Title tag="h6" className="font-semibold text-sm text-neutral-70">
                {readTime}
              </Title>
            </div>

            <Title
              tag="h2"
              className={twMerge(
                'text-neutral-70  font-ZonaPro line-clamp-2',
                'lg:text-[1.375rem] lg:max-w-[20rem]',
                'xl:text-[1.75rem] xl:max-w-[31.6875rem]',
                '2xl:text-[2.5rem] 2xl:max-w-[37.6875rem]'
              )}
              title={newsTitle}
            >
              {newsTitle}
            </Title>

            <Text
              tag="p"
              className="text-base text-neutral-70 line-clamp-1"
              title={newsDescription}
            >
              {newsDescription}
            </Text>
          </div>

          <div className="flex flex-col gap-4">
            <Button
              size="large"
              className={twMerge(
                'bg-orange-100 hover:bg-orange-110 active:bg-orange-110 flex items-center gap-2 h-max',
                'lg:px-4 lg:text-sm lg:gap-1',
                'xl:text-base xl:px-6 xl:gap-2'
              )}
            >
              <Icon path={mdiArrowRight} size={1} />
              Matéria completa
            </Button>

            <Button
              size="large"
              className={twMerge(
                'bg-transparent hover:bg-transparent border border-neutral-70 active:bg-transparent flex items-center gap-2 h-max',
                'lg:px-4 lg:text-sm lg:gap-1',
                'xl:text-base xl:px-6 xl:gap-2'
              )}
            >
              <Icon path={mdiArrowRight} size={1} />
              Mais em inovação
            </Button>
          </div>
        </div>
      </div>
    </Link>
  )
}

export { HomeBlogMainGalleryCard }

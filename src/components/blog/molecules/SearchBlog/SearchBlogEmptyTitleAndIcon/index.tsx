import { Title } from '@/components/generic/atoms/Title'
import { mdiMagnify } from '@mdi/js'
import Icon from '@mdi/react'
import { twMerge } from 'tailwind-merge'

const SearchBlogEmptyTitleAndIcon = (): JSX.Element => {
  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <div
        className={twMerge(
          'w-20 h-20 rounded-full bg-theme-blog-color-70 flex items-center justify-center',
          'lg:w-40 lg:h-40'
        )}
      >
        <Icon
          path={mdiMagnify}
          className={twMerge(
            'text-theme-blog-search-empty-icon-color size-6',
            'lg:size-9'
          )}
        />
      </div>

      <Title
        tag="h3"
        className={twMerge(
          'font-ZonaPro text-2xl font-semibold text-center text-neutral-130',
          'lg:text-[2.5rem]'
        )}
      >
        Nenhum resultado encontrado
      </Title>

      <Title
        tag="h4"
        className={twMerge(
          'text-base text-center text-neutral-110',
          'lg:text-2xl'
        )}
      >
        Que tal experimentar os conteúdos abaixo?
      </Title>
    </div>
  )
}

export { SearchBlogEmptyTitleAndIcon }

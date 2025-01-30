'use client'

import { RichMaterialsBlogEbookHighlight } from '@/components/blog/molecules/RichMaterialsBlog/RichMaterialsBlogEbookHighlight'
import { Button } from '@/components/generic/atoms/Button'
import { Text } from '@/components/generic/atoms/Text'
import { Title } from '@/components/generic/atoms/Title'
import { useGetBlogType } from '@/hooks/blog/useGetBlogType'
import { goToEbookDownloadForm } from '@/utils/RichMaterialsBlo'
import { twMerge } from 'tailwind-merge'
import { IRichMaterialsBlogEbookDetails } from './RichMaterialsBlogEbookDetails.interface'

const RichMaterialsBlogEbookDetails = ({
  initialText,
  ebookHighlights,
  content,
  idealEbookText,
  downloadText,
}: IRichMaterialsBlogEbookDetails): JSX.Element => {
  const blogType = useGetBlogType()

  return (
    <div className={twMerge(blogType, 'flex-1 flex flex-col gap-6')}>
      <Title
        tag="h5"
        className={twMerge(
          'font-ZonaPro font-semibold text-lg text-theme-blog-color-100',
          'lg:text-2xl'
        )}
      >
        {initialText}
      </Title>

      <Title
        tag="h2"
        className={twMerge(
          'font-normal font-ZonaPro text-neutral-130 text-2xl',
          'lg:text-[2.5rem] lg:leading-[1.12]'
        )}
      >
        {content}
      </Title>

      <Title
        tag="h6"
        className={twMerge('text-lg text-placeholder', 'lg:text-2xl')}
      >
        Descubra como:
      </Title>

      <div className="-mt-0.5 flex flex-col gap-6">
        {ebookHighlights.map((textHighlight, indexTextHighlight) => (
          <RichMaterialsBlogEbookHighlight
            key={`text-highlight-${indexTextHighlight}`}
          >
            {textHighlight}
          </RichMaterialsBlogEbookHighlight>
        ))}
      </div>

      <Text
        tag="p"
        className={twMerge('text-xl text-neutral-80', 'lg:text-2xl')}
      >
        {idealEbookText}
      </Text>

      <Title
        tag="h5"
        className={twMerge(
          'text-xl text-theme-blog-color-100 mt-4',
          'text-2xl'
        )}
      >
        {downloadText}
      </Title>

      <Button
        size="large"
        className={twMerge(
          'py-3 bg-theme-blog-secondary-color-100 hover:bg-theme-blog-secondary-color-110 active:bg-theme-blog-secondary-color-110',
          'xl:hidden'
        )}
        onClick={goToEbookDownloadForm}
      >
        Baixar meu e-book
      </Button>
    </div>
  )
}

export { RichMaterialsBlogEbookDetails }

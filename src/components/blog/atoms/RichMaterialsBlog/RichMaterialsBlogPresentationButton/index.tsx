'use client'

import { Button } from '@/components/generic/atoms/Button'
import { useGetBlogType } from '@/hooks/blog/useGetBlogType'
import { goToEbookDownloadForm } from '@/utils/RichMaterialsBlo'
import { mdiTrayArrowDown } from '@mdi/js'
import Icon from '@mdi/react'
import { twMerge } from 'tailwind-merge'

const RichMaterialsPresentationButton = (): JSX.Element => {
  const blogType = useGetBlogType()

  return (
    <Button
      variant="clean"
      className={twMerge(
        blogType,
        'px-4 py-2 rounded-lg bg-theme-blog-presentation-button-background max-w-max text-theme-blog-presentation-button-color flex gap-2 items-center',
        'lg:px-6 lg:py-4'
      )}
      onClick={goToEbookDownloadForm}
    >
      <Icon path={mdiTrayArrowDown} size={1} className="!text-neutral-130" />
      Baixar meu e-book
    </Button>
  )
}

export { RichMaterialsPresentationButton }

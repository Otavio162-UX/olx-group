import { Button } from '@/components/generic/atoms/Button'
import { CategoryCard } from '@/components/generic/atoms/CategoryCard'
import { Text } from '@/components/generic/atoms/Text'
import { Title } from '@/components/generic/atoms/Title'
import { useGetBlogType } from '@/hooks/blog/useGetBlogType'
import { mdiHuman } from '@mdi/js'
import Icon from '@mdi/react'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { IHomeBlogEbookCard } from './HomeBlogEbookCard.interface'

const HomeBlogEbookCard = ({
  title,
  buttonTitle,
  description,
  link,
  ebookId,
}: IHomeBlogEbookCard): JSX.Element => {
  const blogType = useGetBlogType()

  console.log(ebookId)

  return (
    <div className="w-full rounded-3xl shadow-[0px_6px_10px_#00000016] p-6 flex flex-col gap-2 border border-neutral-60">
      <CategoryCard
        variant={blogType}
        className={twMerge('px-1.5 py-1 text-xs font-NunitoSans')}
      >
        {buttonTitle}
      </CategoryCard>

      <Title
        tag="h5"
        className="font-ZonaPro font-semibold text-xl line-clamp-2 text-neutral-100 leading-none"
        title={title}
      >
        {title}
      </Title>

      <Text
        tag="p"
        className="text-neutral-130 text-sm line-clamp-2"
        title={description}
      >
        {description}
      </Text>

      <Link href={link}>
        <Button className="flex items-center gap-2 text-nowrap" size="small">
          <Icon path={mdiHuman} size={'1rem'} className="!text-primary-130" />
          Leia mais
        </Button>
      </Link>
    </div>
  )
}

export { HomeBlogEbookCard }

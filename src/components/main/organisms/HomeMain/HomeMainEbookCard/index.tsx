import { Button } from '@/components/generic/atoms/Button'
import { CategoryCard } from '@/components/generic/atoms/CategoryCard'
import { Text } from '@/components/generic/atoms/Text'
import { Title } from '@/components/generic/atoms/Title'
import { InternalRoutes } from '@/routes/routes'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { IHomeMainEbookCard } from './HomeMainEbookCard.interface'

const HomeMainEbookCard = ({
  title,
  buttonTitle,
  description,
  id,
  blogType,
}: IHomeMainEbookCard): JSX.Element => {
  return (
    <div className="w-full rounded-3xl shadow-[0px_6px_10px_#00000016] p-6 flex flex-col gap-2 border border-neutral-60">
      <Title
        tag="h5"
        className="font-ZonaPro font-semibold text-xl line-clamp-2 text-neutral-100 leading-none"
        title={title}
      >
        {title}
      </Title>

      <CategoryCard
        variant={blogType}
        className={twMerge('px-1.5 py-1 text-xs font-NunitoSans')}
      >
        {buttonTitle}
      </CategoryCard>

      <Text
        tag="p"
        className="text-neutral-130 text-sm line-clamp-2"
        title={description}
      >
        {description}
      </Text>

      <Link href={InternalRoutes.BLOG_RICH_MATERIALS_E_BOOK(blogType, id)}>
        <Button className="max-w-max" size="small">
          Leia mais
        </Button>
      </Link>
    </div>
  )
}

export { HomeMainEbookCard }

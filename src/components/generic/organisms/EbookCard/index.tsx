import { Button } from '@/components/generic/atoms/Button'
import { Text } from '@/components/generic/atoms/Text'
import { Title } from '@/components/generic/atoms/Title'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { IEbookCard } from './EbookCard.interface'
import { ebookCardProps } from './variables/ebookCardProps'

const EbookCard = ({
  title,
  buttonTitle,
  description,
  link,
  variant,
}: IEbookCard): JSX.Element => {
  const { buttonClassNameVariants } = ebookCardProps

  return (
    <div className="w-full rounded-3xl shadow-[0px_6px_10px_#00000016] p-6 flex flex-col gap-2 border border-neutral-60">
      <Title
        tag="h5"
        className="font-ZonaPro font-semibold text-xl line-clamp-2 text-neutral-100 leading-none"
      >
        {title}
      </Title>

      <Button
        className={twMerge(
          'max-w-max px-1.5 py-1 text-sm rounded-lg text-neutral-120',
          buttonClassNameVariants[variant]
        )}
      >
        {buttonTitle}
      </Button>

      <Text tag="p" className="text-neutral-130 text-sm">
        {description}
      </Text>

      <Link href={link}>
        <Button className="max-w-max" size="small">
          Leia mais
        </Button>
      </Link>
    </div>
  )
}

export { EbookCard }

import { Title } from '@/components/generic/atoms/Title'
import { twMerge } from 'tailwind-merge'
import { IHomeMainOlxGroupInfoTexts } from './HomeMainOlxGroupInfoTexts.interface'

const HomeMainOlxGroupInfoTexts = ({
  title,
  description,
}: IHomeMainOlxGroupInfoTexts): JSX.Element => {
  return (
    <div className={twMerge('flex flex-col gap-2 mx-auto', 'lg:mx-0')}>
      <Title
        tag="h2"
        variant="sectionTitle"
        className={twMerge('md:text-[1.8125rem]', 'lg:text-4xl', 'xl:text-5xl')}
      >
        {title}
      </Title>

      <Title
        tag="h5"
        className={twMerge(
          'text-base font-ZonaPro text-primary-130 text-center',
          'lg:text-lg',
          'xl:text-xl'
        )}
      >
        {description}
      </Title>
    </div>
  )
}

export { HomeMainOlxGroupInfoTexts }

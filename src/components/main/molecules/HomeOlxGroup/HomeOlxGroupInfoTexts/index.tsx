import { Title } from '@/components/generic/atoms/Title'
import { twMerge } from 'tailwind-merge'
import { IHomeOlxGroupInfoTexts } from './HomeOlxGroupInfoTexts.interface'

const HomeOlxGroupInfoTexts = ({
  title,
  description,
}: IHomeOlxGroupInfoTexts): JSX.Element => {
  return (
    <div className={twMerge('flex flex-col gap-2 mx-auto', 'lg:mx-0')}>
      <Title
        tag="h2"
        className={twMerge(
          'text-[2rem] font-ZonaPro text-primary-100 text-center',
          'lg:text-4xl',
          'xl:text-5xl'
        )}
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

export { HomeOlxGroupInfoTexts }

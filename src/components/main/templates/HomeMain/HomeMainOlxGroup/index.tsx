import { Button } from '@/components/generic/atoms/Button'
import { BrandGroup } from '@/components/generic/organisms/BrandGroup'
import { HomeMainOlxGroupTitles } from '@/components/main/molecules/HomeMain/HomeMainOlxGroupTitles'
import { HomeMainOlxGroupInfo } from '@/components/main/organisms/HomeMain/HomeMainOlxGroupInfo'
import { InternalRoutes } from '@/routes/routes'
import { mdiChevronRight } from '@mdi/js'
import Icon from '@mdi/react'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

const HomeMainOlxGroup = (): JSX.Element => {
  return (
    <section
      className={twMerge(
        'pt-8 flex flex-col gap-20 w-full pb-8',
        'lg:pt-[7rem]'
      )}
    >
      <HomeMainOlxGroupTitles />
      <BrandGroup />
      <HomeMainOlxGroupInfo />

      <Link href={InternalRoutes.WHO_WE_ARE}>
        <Button className="flex items-center gap-6 w-max mx-auto">
          Quem Somos <Icon path={mdiChevronRight} size={1} />
        </Button>
      </Link>
    </section>
  )
}

export { HomeMainOlxGroup }

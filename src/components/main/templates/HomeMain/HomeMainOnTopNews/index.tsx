import { Title } from '@/components/generic/atoms/Title'
import { HomeMainOnTopNewsBlogTabination } from '@/components/main/organisms/HomeMain/HomeMainOnTopNewsBlogTabination'
import { HomeMainOnTopNewsEbookTabination } from '@/components/main/organisms/HomeMain/HomeMainOnTopNewsEbookTabination'

const HomeMainOnTopNews = (): JSX.Element => {
  return (
    <section className="mx-auto max-w-container1328 py-10 flex flex-col gap-8">
      <Title variant="sectionTitle" className={'text-start'}>
        Fique por dentro das novidades
      </Title>

      <HomeMainOnTopNewsBlogTabination />
      <HomeMainOnTopNewsEbookTabination />
    </section>
  )
}

export { HomeMainOnTopNews }

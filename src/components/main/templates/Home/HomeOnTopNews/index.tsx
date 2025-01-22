import { Title } from '@/components/generic/atoms/Title'
import { HomeOnTopNewsBlogTabination } from '@/components/main/organisms/HomeOnTopNews/HomeOnTopNewsBlogTabination'
import { HomeOnTopNewsEbookTabination } from '@/components/main/organisms/HomeOnTopNews/HomeOnTopNewsEbookTabination'

const HomeOnTopNews = (): JSX.Element => {
  return (
    <section className="mx-auto max-w-container1328 py-10 flex flex-col gap-8">
      <Title variant="sectionTitle" className={'text-start'}>
        Fique por dentro das novidades
      </Title>

      <HomeOnTopNewsBlogTabination />
      <HomeOnTopNewsEbookTabination />
    </section>
  )
}

export { HomeOnTopNews }

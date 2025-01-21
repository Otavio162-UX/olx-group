import { Title } from '@/components/generic/atoms/Title'

const HomeStayOnTopNews = (): JSX.Element => {
  return (
    <section className="mx-auto max-w-container1328 py-10 flex flex-col gap-8">
      <Title variant="sectionTitle" className={'text-start'}>
        Fique por dentro das novidades
      </Title>
    </section>
  )
}

export { HomeStayOnTopNews }

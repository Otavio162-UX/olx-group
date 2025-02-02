import { Title } from '@/components/generic/atoms/Title'
import { HomeMainOurEventsCard } from '@/components/main/molecules/HomeMain/HomeMainOurEventsCard'
import { InternalRoutes } from '@/routes/routes'

const HomeMainOurEvents = (): JSX.Element => {
  return (
    <section className={'py-8 flex flex-col gap-12'}>
      <Title variant="sectionTitle">Nossos eventos</Title>

      <HomeMainOurEventsCard
        src="/main/home/conecta.svg"
        alt="conecta-image"
        title="Conecta"
        description="Conheça o pilar de eventos do Grupo OLX."
        link={InternalRoutes.EVENTS}
      />
    </section>
  )
}

export { HomeMainOurEvents }

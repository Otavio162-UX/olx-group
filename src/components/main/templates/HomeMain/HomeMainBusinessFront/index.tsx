import { Title } from '@/components/generic/atoms/Title'
import { HomeMainBusinessFrontGrid } from '@/components/main/organisms/HomeMain/HomeMainBusinessFrontGrid'

const HomeMainBusinessFront = (): JSX.Element => {
  return (
    <section className="py-8 flex flex-col gap-20">
      <Title tag="h2" variant="sectionTitle">
        Nossas frentes de negócio
      </Title>

      <HomeMainBusinessFrontGrid />
    </section>
  )
}

export { HomeMainBusinessFront }

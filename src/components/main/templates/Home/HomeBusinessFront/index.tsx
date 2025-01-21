import { Title } from '@/components/generic/atoms/Title'
import { HomeBusinessFrontGrid } from '@/components/main/organisms/HomeBusinessFrontGrid'

const HomeBusinessFront = (): JSX.Element => {
  return (
    <section className="py-8 flex flex-col gap-20">
      <Title tag="h2" variant="sectionTitle">
        Nossas frentes de negócio
      </Title>

      <HomeBusinessFrontGrid />
    </section>
  )
}

export { HomeBusinessFront }

import { Title } from '@/components/generic/atoms/Title'
import { HomeBusinessFrontGrid } from '@/components/main/organisms/HomeBusinessFrontGrid'
import { twMerge } from 'tailwind-merge'

const BusinessFront = (): JSX.Element => {
  return (
    <section className="py-8 flex flex-col gap-20">
      <Title
        tag="h2"
        className={twMerge(
          'text-[2rem] text-center text-primary-100 font-ZonaPro',
          'lg:text-5xl'
        )}
      >
        Nossas frentes de negócio
      </Title>

      <HomeBusinessFrontGrid />
    </section>
  )
}

export { BusinessFront }

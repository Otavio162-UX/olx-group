import { HomeMainBusinessFrontGridCard } from '@/components/main/molecules/HomeMain/HomeMainBusinessFrontGridCard'
import { twMerge } from 'tailwind-merge'
import { homeMainBusinessFrontGrid } from './arrays/homeMainBusinessFrontGrid'

const HomeMainBusinessFrontGrid = (): JSX.Element => {
  return (
    <div className={twMerge('grid grid-cols-1 gap-8', 'md:grid-cols-2')}>
      {homeMainBusinessFrontGrid.map((card, indexCard) => (
        <HomeMainBusinessFrontGridCard
          key={`home-business-front-grid-card-${indexCard}`}
          {...card}
        />
      ))}
    </div>
  )
}

export { HomeMainBusinessFrontGrid }

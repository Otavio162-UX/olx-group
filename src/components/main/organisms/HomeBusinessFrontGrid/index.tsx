import { HomeBusinessFrontGridCard } from '@/components/main/molecules/HomeBusinessFrontGridCard'
import { twMerge } from 'tailwind-merge'
import { homeBusinessFrontGrid } from './arrays/homeBusinessFrontGrid'

const HomeBusinessFrontGrid = (): JSX.Element => {
  return (
    <div className={twMerge('grid grid-cols-1 gap-8', 'md:grid-cols-2')}>
      {homeBusinessFrontGrid.map((card, indexCard) => (
        <HomeBusinessFrontGridCard
          key={`home-business-front-grid-card-${indexCard}`}
          {...card}
        />
      ))}
    </div>
  )
}

export { HomeBusinessFrontGrid }

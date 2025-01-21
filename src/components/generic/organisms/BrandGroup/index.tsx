import { BrandGroupCard } from '@/components/generic/molecules/BrandGroupCard'
import { twMerge } from 'tailwind-merge'
import { brandGroupImages } from './arrays/brandGroupImages'

const BrandGroup = (): JSX.Element => {
  return (
    <div
      className={twMerge(
        'grid grid-cols-1 flex-1 gap-x-12 gap-y-6',
        'lg:grid-cols-3 lg:gap-x-6',
        'xl:gap-x-12'
      )}
    >
      {brandGroupImages.map((item, indexItem) => (
        <BrandGroupCard key={`brand-group-card-${indexItem}`} {...item} />
      ))}
    </div>
  )
}

export { BrandGroup }

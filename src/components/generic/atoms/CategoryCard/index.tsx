import { twMerge } from 'tailwind-merge'
import { ICategoryCard } from './CategoryCard.interface'
import { categoryCardProps } from './variables/categoryCardProps'

const CategoryCard = ({
  variant,
  className,
  version,
  children,
}: ICategoryCard): JSX.Element => {
  const { classNameVariants, versionType } = categoryCardProps

  return (
    <span
      className={twMerge(
        'text-neutral-120 px-3 w-max py-2 text-sm font-semibold border-none rounded-lg',
        version && versionType[version],
        classNameVariants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}

export { CategoryCard }

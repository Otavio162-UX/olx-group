import { Button } from '@/components/atoms/Button'
import Icon from '@mdi/react'
import { twMerge } from 'tailwind-merge'
import { IButtonScrollIndicator } from './ButtonScrollIndicator.interface'
import { tabinationButtonIndicatorProps } from './variables/tabinationButtonIndicatorProps'

const ButtonScrollIndicator = ({
  variant,
}: IButtonScrollIndicator): JSX.Element => {
  const { classNameVariants, iconsVariants } = tabinationButtonIndicatorProps

  return (
    <Button
      variant="clean"
      className={twMerge(
        'text-neutral-130 z-[1] absolute top-0 p-0 rounded-none bg-neutral-70',
        classNameVariants[variant]
      )}
    >
      <Icon path={iconsVariants[variant]} size={1.5} />
    </Button>
  )
}

export { ButtonScrollIndicator }

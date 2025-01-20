import { Button } from '@/components/main/atoms/Button'
import { twMerge } from 'tailwind-merge'
import { ITabinationButton } from './TabinationButton.interface'
import { tabinationButtonProps } from './variables/tabinationButtonProps'

const TabinationButton = ({
  variant = 'inactive',
  children,
  onClick,
}: ITabinationButton): JSX.Element => {
  const { classNameVariants } = tabinationButtonProps

  return (
    <Button
      variant="clean"
      className={twMerge(
        'px-4 py-2 border-b-[.0625rem] font-semibold rounded-none transition-all text-nowrap',
        classNameVariants[variant]
      )}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}

export { TabinationButton }

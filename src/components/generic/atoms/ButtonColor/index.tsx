import { Button } from '@/components/generic/atoms/Button'
import { twMerge } from 'tailwind-merge'
import { IButtonColor } from './ButtonColor.interface'
import { buttonColorProps } from './variables/buttonColorProps'

const ButtonColor = ({
  variant,
  onClick,
  children,
}: IButtonColor): JSX.Element => {
  const { classNameVariants } = buttonColorProps

  return (
    <Button
      className={twMerge(
        'text-neutral-120 px-3 py-2 text-sm font-semibold w-max border-none cursor-default',
        classNameVariants[variant]
      )}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}

export { ButtonColor }

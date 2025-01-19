import { Button } from '@/components/atoms/Button'
import { twMerge } from 'tailwind-merge'
import { IButtonTabination } from './ButtonTabination.interface'
import { buttonTabinationVariants } from './variables/variants'

const ButtonTabination = ({
  variant = 'inactive',
  children,
  onClick,
}: IButtonTabination): JSX.Element => {
  return (
    <Button
      variant="clean"
      className={twMerge(
        'px-4 py-2 border-b-[.0625rem] font-semibold rounded-none transition-all text-nowrap',
        buttonTabinationVariants[variant]
      )}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}

export { ButtonTabination }

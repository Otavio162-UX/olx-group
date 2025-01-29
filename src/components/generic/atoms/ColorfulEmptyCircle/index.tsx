import { twMerge } from 'tailwind-merge'
import { IColorfulEmptyCircle } from './ColorfulEmptyCircle.interface'
import { colorfulEmptyCircleProps } from './variables/colorfulEmptyCircleProps'

const ColorfulEmptyCircle = ({
  variant,
}: IColorfulEmptyCircle): JSX.Element => {
  const { classNameVariants } = colorfulEmptyCircleProps

  return (
    <span
      className={twMerge('w-12 h-12 rounded-full', classNameVariants[variant])}
    />
  )
}

export { ColorfulEmptyCircle }

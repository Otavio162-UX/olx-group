import { twMerge } from 'tailwind-merge'
import { ISelect } from './Select.interface'

const Select = ({
  className,
  options,
  placeholder,
  ...rest
}: ISelect): JSX.Element => {
  return (
    <select
      className={twMerge(
        'w-full py-3 px-4 placeholder:text-placeholder text-placeholder text-base border border-neutral-90 rounded-lg outline-neutral-90',
        className
      )}
      {...rest}
    >
      <option value={''}>{placeholder}</option>
      {options.map((optionValue, indexOptionValue) => (
        <option key={`option-${indexOptionValue}`} value={optionValue.id}>
          {optionValue.label}
        </option>
      ))}
    </select>
  )
}

export { Select }

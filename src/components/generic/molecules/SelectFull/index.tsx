import { Label } from '@/components/generic/atoms/Label'
import { Select } from '@/components/generic/atoms/Select'
import { ErrorMessage } from '@/components/generic/molecules/ErrorMessage'
import { twMerge } from 'tailwind-merge'
import { ISelectFull } from './SelectFull.interface'

const SelectFull = ({
  wrapperElementClassName,
  labelClassName,
  selectClassName,
  id,
  placeholder,
  value,
  onChange,
  message,
  options,
  label,
  required,
}: ISelectFull): JSX.Element => {
  return (
    <div className={twMerge('flex flex-col gap-2', wrapperElementClassName)}>
      <Label id={id} className={labelClassName}>
        {label}
      </Label>

      <Select
        id={id}
        placeholder={placeholder}
        className={twMerge('h-12', selectClassName)}
        value={value}
        onChange={onChange}
        options={options}
        required={required}
      />

      <ErrorMessage message={message} />
    </div>
  )
}

export { SelectFull }

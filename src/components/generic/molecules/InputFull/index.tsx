import { Input } from '@/components/generic/atoms/Input'
import { Label } from '@/components/generic/atoms/Label'
import { ErrorMessage } from '@/components/generic/molecules/ErrorMessage'
import { twMerge } from 'tailwind-merge'
import { IInputFull } from './InputFull.interface'

const InputFull = ({
  wrapperElementClassName,
  labelClassName,
  inputClassName,
  id,
  placeholder,
  value,
  onChange,
  minLength,
  maxLength,
  message,
  label,
  required,
}: IInputFull): JSX.Element => {
  return (
    <div className={twMerge('flex flex-col gap-2', wrapperElementClassName)}>
      <Label id={id} className={labelClassName}>
        {label}
      </Label>

      <Input
        id={id}
        placeholder={placeholder}
        className={twMerge('h-12', inputClassName)}
        value={value}
        onChange={onChange}
        minLength={minLength}
        maxLength={maxLength}
        required={required}
      />

      <ErrorMessage message={message} />
    </div>
  )
}

export { InputFull }

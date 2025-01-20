import { Button } from '@/components/generic/atoms/Button'
import { Loading } from '@/components/generic/atoms/Loading'
import { mdiMagnify } from '@mdi/js'
import Icon from '@mdi/react'
import { twMerge } from 'tailwind-merge'
import { Input } from '../../atoms/Input'
import { ErrorMessage } from '../../molecules/ErrorMessage'
import { ISearchInput } from './SearchInput.interface'
import { searchInputProps } from './variables/searchInputProps'

const SearchInput = ({
  wrapperElementClassName,
  iconClassName,
  inputClassName,
  loadingClassName,
  value,
  onChange,
  onClick,
  loading,
  disabled,
  variant,
  errorMessage,
}: ISearchInput): JSX.Element => {
  const isDisabled = disabled || loading

  const showError = variant === 'error' && errorMessage

  const { classNameVariants } = searchInputProps

  return (
    <div className="flex flex-col gap-2">
      <div
        className={twMerge(
          'w-full h-12 px-4 flex items-center border rounded-lg gap-2 transition-all',
          'focus-within:border-primary-100 focus-within:border-2',
          !isDisabled && 'hover:border-2',
          value && 'border-neutral-100',
          disabled && 'border-none',
          variant && classNameVariants[variant],
          wrapperElementClassName
        )}
      >
        <Button
          variant="clean"
          className={twMerge(
            'p-0 rounded-none text-neutral-130 disabled:text-neutral-130',
            iconClassName
          )}
          disabled={isDisabled}
          onClick={onClick}
        >
          <Icon path={mdiMagnify} size={1} />
        </Button>

        <Input
          type="text"
          variant="clean"
          placeholder="Buscar"
          onChange={onChange}
          className={inputClassName}
          disabled={isDisabled}
        />

        {loading && !disabled && (
          <Loading
            size="small"
            className={twMerge(
              'border-secondary-100 border-b-transparent',
              loadingClassName
            )}
          />
        )}
      </div>

      {showError && <ErrorMessage message={errorMessage} />}
    </div>
  )
}

export { SearchInput }

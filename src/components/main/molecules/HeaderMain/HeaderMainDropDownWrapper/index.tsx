import { twMerge } from 'tailwind-merge'
import { IHeaderMainDropDownWrapper } from './HeaderMainDropDownWrapper.interface'

const HeaderMainDropDownWrapper = ({
  children,
}: IHeaderMainDropDownWrapper): JSX.Element => {
  return (
    <nav
      className={twMerge(
        'bg-primary-100 min-w-minContainer w-full z-20',
        'lg:absolute lg:top-full lg:left-0 lg:min-h-[19.0625rem] lg:py-6'
      )}
    >
      <div className="wrapperContainer max-w-container1328 flex flex-col gap-4">
        {children}
      </div>
    </nav>
  )
}

export { HeaderMainDropDownWrapper }

import { twMerge } from 'tailwind-merge'
import { IHeaderDropDownWrapper } from './HeaderDropDownWrapper.interface'

const HeaderDropDownWrapper = ({
  children,
}: IHeaderDropDownWrapper): JSX.Element => {
  return (
    <nav
      className={twMerge(
        'bg-primary-100 min-w-minContainer w-screen z-20',
        'lg:absolute lg:top-full lg:left-0 lg:min-h-[19.0625rem] lg:py-6'
      )}
    >
      <div className="wrapperContainer max-w-container1328 flex flex-col gap-4">
        {children}
      </div>
    </nav>
  )
}

export { HeaderDropDownWrapper }

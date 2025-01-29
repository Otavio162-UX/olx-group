import { Title } from '@/components/generic/atoms/Title'
import { HeaderMainDropDownWrapper } from '@/components/main/molecules/HeaderMain/HeaderMainDropDownWrapper'
import { twMerge } from 'tailwind-merge'
import { IHeaderDropDownDefault } from './HeaderMainDropDownDefault.interface'
import { headerMainDropDownDefaultProps } from './variables/headerMainDropDownDefaultProps'

const HeaderMainDropDownDefault = ({
  dropDownDefault,
}: IHeaderDropDownDefault): JSX.Element => {
  const { title, submenu } =
    headerMainDropDownDefaultProps.submenu[dropDownDefault]

  return (
    <HeaderMainDropDownWrapper>
      <div className="flex flex-col gap-4">
        <Title
          tag="h6"
          className={twMerge(
            'hidden',
            'lg:block lg:text-lg lg:text-neutral-70 lg:font-ZonaPro lg:font-bold'
          )}
        >
          {title}
        </Title>

        <div className="flex flex-col gap-6">
          {submenu.map((text, indexText) => (
            <Title
              key={`our-portals-submenu-${indexText}`}
              tag="h6"
              className={twMerge(
                'font-ZonaPro font-bold text-base text-primary-70 px-6',
                'lg:px-0'
              )}
            >
              {text}
            </Title>
          ))}
        </div>
      </div>
    </HeaderMainDropDownWrapper>
  )
}

export { HeaderMainDropDownDefault }

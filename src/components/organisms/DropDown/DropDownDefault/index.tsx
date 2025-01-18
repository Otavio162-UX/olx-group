import { Title } from '@/components/atoms/Title'
import { WrapperDropDown } from '@/components/molecules/DropDown/WrapperDropDown'
import { twMerge } from 'tailwind-merge'
import { IDropDownDefault } from './DropDownDefault.interface'
import { submenuDefault } from './variables/submenuDefault'

const DropDownDefault = ({
  dropDownDefault,
}: IDropDownDefault): JSX.Element => {
  const { title, submenu } = submenuDefault[dropDownDefault]

  return (
    <WrapperDropDown>
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
    </WrapperDropDown>
  )
}

export { DropDownDefault }

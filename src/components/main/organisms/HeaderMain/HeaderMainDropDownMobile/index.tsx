import { ButtonCollapsible } from '@/components/generic/molecules/ButtonCollapsible'
import { headerMainMenu } from '@/components/main/templates/HeaderMain/arrays/headerMainMenu'

const HeaderMainDropDownMobile = (): JSX.Element => {
  return (
    <div className="absolute top-full left-0 bg-primary-100 min-w-minContainer w-screen z-20 py-6 h-[calc(100vh_-_54px)] overflow-y-auto">
      {headerMainMenu.map((item, indexItem) => (
        <ButtonCollapsible
          key={`button-menu-${indexItem}`}
          link={item.link}
          buttonTitle={item.buttonTitle}
          iconProps={item.iconProps}
        >
          {item.children}
        </ButtonCollapsible>
      ))}
    </div>
  )
}

export { HeaderMainDropDownMobile }

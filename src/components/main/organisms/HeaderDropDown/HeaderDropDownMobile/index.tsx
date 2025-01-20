import { ButtonCollapsible } from '@/components/main/molecules/ButtonCollapsible'
import { headerMenu } from '@/components/main/templates/Header/arrays/headerMenu'

const HeaderDropDownMobile = (): JSX.Element => {
  return (
    <div className="absolute top-full left-0 bg-primary-100 min-w-minContainer w-screen z-20 py-6 min-h-[calc(100vh_-_72px)]">
      {headerMenu.map((item, indexItem) => (
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

export { HeaderDropDownMobile }

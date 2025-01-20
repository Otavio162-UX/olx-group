import { ButtonMenu } from '@/components/molecules/Menu/ButtonMenu'
import { menu } from '@/components/templates/Header/arrays/menu'

const DropDownMobile = (): JSX.Element => {
  return (
    <div className="absolute top-full left-0 bg-primary-100 min-w-minContainer w-screen z-20 py-6 min-h-[calc(100vh_-_72px)]">
      {menu.map((item, indexItem) => (
        <ButtonMenu
          key={`button-menu-${indexItem}`}
          link={item.link}
          buttonTitle={item.buttonTitle}
          iconProps={item.iconProps}
        >
          {item.children}
        </ButtonMenu>
      ))}
    </div>
  )
}

export { DropDownMobile }

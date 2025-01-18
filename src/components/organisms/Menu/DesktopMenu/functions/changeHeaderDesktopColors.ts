interface IChangeHeaderDesktopColors {
  openMenu: boolean
}

export const changeHeaderDesktopColors = ({
  openMenu,
}: IChangeHeaderDesktopColors) => {
  const headerColors = {
    background: openMenu ? 'var(--primary-100)' : 'var(--neutral-70)',
    icons: openMenu ? 'var(--neutral-70)' : 'var(--primary-100)',
    text: openMenu ? 'var(--neutral-70)' : 'var(--neutral-130)',
  }

  const headerChangeColors = [
    {
      variable: '--header-desktop-background',
      color: headerColors.background,
    },
    {
      variable: '--header-desktop-icons',
      color: headerColors.icons,
    },
    {
      variable: '--button-menu',
      color: headerColors.text,
    },
  ]

  headerChangeColors.forEach(({ variable, color }) => {
    document.documentElement.style.setProperty(variable, color)
  })
}

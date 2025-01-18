'use client'

interface IChangeHeaderMobileColors {
  openMenu: boolean
}

export const changeHeaderMobileColors = ({
  openMenu,
}: IChangeHeaderMobileColors) => {
  const headerColors = {
    background: openMenu ? 'var(--primary-100)' : 'var(--neutral-70)',
    icons: openMenu ? 'var(--neutral-70)' : 'var(--primary-100)',
  }

  const headerChangeColors = [
    {
      variable: '--header-mobile-background',
      color: headerColors.background,
    },
    {
      variable: '--header-mobile-icons',
      color: headerColors.icons,
    },
  ]

  headerChangeColors.forEach(({ variable, color }) => {
    document.documentElement.style.setProperty(variable, color)
  })
}

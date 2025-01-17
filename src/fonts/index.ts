import { Inter as inter, Roboto as roboto } from 'next/font/google'
import { twMerge } from 'tailwind-merge'
import localFont from 'next/font/local'

const ZonaPro = localFont({
  src: [
    {
      path: './zonaPro/zonaPro-Bold.ttf',
      style: 'Bold',
      weight: '700',
    },
    {
      path: './zonaPro/zonaPro-Regular.ttf',
      style: 'Regular',
      weight: '400',
    },
    {
      path: './zonaPro/zonaPro-Light.ttf',
      style: 'Light',
      weight: '300',
    },
    {
      path: './zonaPro/zonaPro-Thin.ttf',
      style: 'Thin',
      weight: '200',
    },
  ],
  variable: '--font-ZonaPro',
  weight: '200 300 400 700',
})

export const Roboto = roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-Roboto',
})

export const Inter = inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-Inter',
})

export const allFonts = twMerge(
  ZonaPro.variable,
  Roboto.className,
  Roboto.variable,
  Inter.variable
)

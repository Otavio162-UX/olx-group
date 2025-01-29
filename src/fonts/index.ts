import {
  Inter as inter,
  Nunito_Sans as nunitoSans,
  Roboto as roboto,
} from 'next/font/google'
import localFont from 'next/font/local'
import { twMerge } from 'tailwind-merge'

const ZonaPro = localFont({
  src: [
    {
      path: './zonaPro/ZonaPro-Black.otf',
      style: 'Black',
      weight: '900',
    },
    {
      path: './zonaPro/ZonaPro-ExtraBold.otf',
      style: 'ExtraBold',
      weight: '800',
    },
    {
      path: './zonaPro/ZonaPro-Bold.otf',
      style: 'Bold',
      weight: '700',
    },
    {
      path: './zonaPro/ZonaPro-SemiBold.otf',
      style: 'SemiBold',
      weight: '600',
    },
    {
      path: './zonaPro/ZonaPro-Ultra.otf',
      style: 'SemiBold',
      weight: '500',
    },
    {
      path: './zonaPro/ZonaPro-Regular.otf',
      style: 'Regular',
      weight: '400',
    },
    {
      path: './zonaPro/ZonaPro-Light.otf',
      style: 'Light',
      weight: '300',
    },
    {
      path: './zonaPro/ZonaPro-Thin.otf',
      style: 'Thin',
      weight: '200',
    },
  ],
  variable: '--font-ZonaPro',
  weight: '200 300 400 500 600 700 800 900',
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

export const NunitoSans = nunitoSans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-Nunito-Sans',
})

export const allFonts = twMerge(
  ZonaPro.variable,
  Roboto.className,
  Roboto.variable,
  Inter.variable,
  NunitoSans.variable
)

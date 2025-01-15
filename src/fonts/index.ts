import { Inter as inter } from 'next/font/google'
import { twMerge } from 'tailwind-merge'

export const Inter = inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-Inter',
})

export const allFonts = twMerge(Inter.className)

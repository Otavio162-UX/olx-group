import { Metadata } from 'next'
import { twMerge } from 'tailwind-merge'

import { allFonts } from '@/fonts'
import { TRootLayoutParams } from '@/types/global'

import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Grupo OLX',
  description: 'OLX Site',
}

export default function LocaleLayout({ children }: TRootLayoutParams) {
  return (
    <html lang={'pt-BR'}>
      <body
        className={twMerge(
          allFonts,
          'flex flex-col min-h-screen antialiased w-full max-w-[100vw] min-w-minContainer'
        )}
      >
        {children}
      </body>
    </html>
  )
}

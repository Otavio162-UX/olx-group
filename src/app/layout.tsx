import { Metadata } from 'next'
import { twMerge } from 'tailwind-merge'

import { allFonts } from '@/fonts'

import '@/styles/globals.css'
import { Header } from '@/components/templates/Header'

export const metadata: Metadata = {
  title: 'Grupo OLX',
  description: 'OLX Site',
}

export type TRootLayoutParams = Readonly<{
  children: React.ReactNode
}>

export default async function LocaleLayout({ children }: TRootLayoutParams) {
  return (
    <html lang={'pt-BR'}>
      <body
        className={twMerge(
          allFonts,
          'flex flex-col min-h-screen antialiased w-full max-w-[100vw] min-w-[17.5rem]'
        )}
      >
        <Header />
        {children}
      </body>
    </html>
  )
}

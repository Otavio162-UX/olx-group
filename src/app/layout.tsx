import { Metadata } from 'next'
import { twMerge } from 'tailwind-merge'

import { Header } from '@/components/templates/Header'
import { allFonts } from '@/fonts'

import { Footer } from '@/components/templates/Footer'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Grupo OLX',
  description: 'OLX Site',
}

export type TRootLayoutParams = Readonly<{
  children: React.ReactNode
}>

export default function LocaleLayout({ children }: TRootLayoutParams) {
  return (
    <html lang={'pt-BR'}>
      <body
        className={twMerge(
          allFonts,
          'flex flex-col min-h-screen antialiased w-full max-w-[100vw] min-w-minContainer'
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

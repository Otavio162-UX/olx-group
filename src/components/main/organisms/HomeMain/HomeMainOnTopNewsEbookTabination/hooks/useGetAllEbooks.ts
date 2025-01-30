'use client'

import { IHomeMainEbookCard } from '@/components/main/organisms/HomeMain/HomeMainEbookCard/HomeMainEbookCard.interface'

const all: IHomeMainEbookCard[] = [
  {
    title:
      'Data OLX Autos traz perspectivas do setor automotivo no encerramento do ano',
    buttonTitle: 'Imóveis',
    description: 'Descrição resumida do e-book',
    id: 'ebook-1',
    blogType: 'immobile',
  },
  {
    title:
      'Data OLX Autos traz perspectivas do setor automotivo no encerramento do ano',
    buttonTitle: 'Imóveis',
    description: 'Descrição resumida do e-book',
    id: 'ebook-1',
    blogType: 'immobile',
  },
  {
    title:
      'Data OLX Autos traz perspectivas do setor automotivo no encerramento do ano',
    buttonTitle: 'Imóveis',
    description: 'Descrição resumida do e-book',
    id: 'ebook-1',
    blogType: 'autos',
  },
  {
    title:
      'Data OLX Autos traz perspectivas do setor automotivo no encerramento do ano',
    buttonTitle: 'Imóveis',
    description: 'Descrição resumida do e-book',
    id: 'ebook-1',
    blogType: 'immobile',
  },
  {
    title:
      'Data OLX Autos traz perspectivas do setor automotivo no encerramento do ano',
    buttonTitle: 'Imóveis',
    description: 'Descrição resumida do e-book',
    id: 'ebook-1',
    blogType: 'autos',
  },
]

const immobile: IHomeMainEbookCard[] = [
  {
    title:
      'Data OLX Autos traz perspectivas do setor automotivo no encerramento do ano',
    buttonTitle: 'Imóveis',
    description: 'Descrição resumida do e-book',
    id: 'ebook-1',
    blogType: 'immobile',
  },
  {
    title:
      'Data OLX Autos traz perspectivas do setor automotivo no encerramento do ano',
    buttonTitle: 'Imóveis',
    description: 'Descrição resumida do e-book',
    id: 'ebook-1',
    blogType: 'immobile',
  },
  {
    title:
      'Data OLX Autos traz perspectivas do setor automotivo no encerramento do ano',
    buttonTitle: 'Imóveis',
    description: 'Descrição resumida do e-book',
    id: 'ebook-1',
    blogType: 'immobile',
  },
  {
    title:
      'Data OLX Autos traz perspectivas do setor automotivo no encerramento do ano',
    buttonTitle: 'Imóveis',
    description: 'Descrição resumida do e-book',
    id: 'ebook-1',
    blogType: 'immobile',
  },
]

const autos: IHomeMainEbookCard[] = [
  {
    title:
      'Data OLX Autos traz perspectivas do setor automotivo no encerramento do ano',
    buttonTitle: 'Imóveis',
    description: 'Descrição resumida do e-book',
    id: 'ebook-1',
    blogType: 'autos',
  },
]

export const homeMainOnTopNewsEbookTabination: IHomeMainEbookCard[][] = [
  all,
  immobile,
  autos,
]

export const useGetAllEbooks = (): IHomeMainEbookCard[][] => {
  return homeMainOnTopNewsEbookTabination
}

import { RichMaterialsBlogEbookDetails } from '@/components/blog/organisms/RichMaterialsBlog/RichMaterialsBlogEbookDetails'
import { RichMaterialsBlogEbookForm } from '@/components/blog/organisms/RichMaterialsBlog/RichMaterialsBlogEbookForm'
import { twMerge } from 'tailwind-merge'

const RichMaterialsBlogEbookInfo = (): JSX.Element => {
  const initialText = 'E-book gratuito'

  const ebookHighlights = [
    'Utilizando estratégias digitais para atrair proprietários interessados',
    'Criando uma rede de contatos sólida e de confiança',
    'Aumentando sua carteira de imóveis com métodos comprovados de prospecção',
  ]

  const content = [
    'Nesse e-book você encontrará as ',
    <strong key="strong-1">melhores práticas</strong>,
    ' para captar mais propriedades e atrair clientes de ',
    <strong key="strong-2">forma assertiva.</strong>,
  ]

  const idealEbookText = `Este guia é ideal para corretores e gestores que desejam se tornar
        referências no setor imobiliário e conquistar mais oportunidades de
        negócios.`

  const downloadText = `Para fazer o download do e-Book, basta preencher o formulário e clicar
        em “Baixar e-Book”.`

  return (
    <section
      className={twMerge(
        'wrapperContainer max-w-container1328 py-9 flex flex-col gap-6 items-center',
        'xl:pt-[9.5rem] xl:pb-[10.125rem] xl:items-start xl:flex-row-reverse xl:gap-24'
      )}
    >
      <RichMaterialsBlogEbookForm ebookName="Captação Imobiliária Estratégica" />
      <RichMaterialsBlogEbookDetails
        initialText={initialText}
        ebookHighlights={ebookHighlights}
        content={content}
        idealEbookText={idealEbookText}
        downloadText={downloadText}
      />
    </section>
  )
}

export { RichMaterialsBlogEbookInfo }

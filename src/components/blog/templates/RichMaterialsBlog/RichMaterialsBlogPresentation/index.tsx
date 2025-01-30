import { RichMaterialsPresentationButton } from '@/components/blog/atoms/RichMaterialsBlog/RichMaterialsBlogPresentationButton'
import { RichMaterialsBlogPresentationShape } from '@/components/blog/atoms/RichMaterialsBlog/RichMaterialsBlogPresentationShape'
import { ImageComponent } from '@/components/generic/atoms/ImageComponent'
import { Text } from '@/components/generic/atoms/Text'
import { Title } from '@/components/generic/atoms/Title'
import { twMerge } from 'tailwind-merge'

const RichMaterialsBlogPresentation = (): JSX.Element => {
  const title = 'Tendências do Mercado Automotivo'
  const subtitle = 'Você sabe como se destacar em um mercado tão competitivo?'
  const ebookImageUrl =
    'https://www.studio750.com.br/images/uploads/posts/desktop/s750-olx-ebook-capa.png'

  return (
    <section
      className={twMerge(
        'bg-primary-100 w-full overflow-hidden h-[22.9375rem]',
        'lg:h-[45rem]'
      )}
    >
      <div
        className={twMerge(
          'wrapperContainer max-w-container1328 relative z-[2] h-full flex items-center justify-between pr-24'
        )}
      >
        <div
          className={twMerge(
            'w-full flex flex-col justify-center h-full',
            'lg:max-w-[40rem] lg:leading-[1]'
          )}
        >
          <div className={twMerge('flex flex-col gap-4', 'lg:gap-10')}>
            <div className={twMerge('flex flex-col gap-2', 'lg:gap-6')}>
              <Title
                tag="h1"
                className={twMerge(
                  'text-neutral-70 text-[2rem] font-ZonaPro',
                  'lg:text-[3.5rem]'
                )}
              >
                {title}
              </Title>

              <Text
                tag="p"
                className={twMerge('text-xl text-neutral-70', 'lg:text-2xl')}
              >
                {subtitle}
              </Text>
            </div>

            <RichMaterialsPresentationButton />
          </div>
        </div>

        <div className={twMerge('hidden', 'lg:block')}>
          <ImageComponent
            src={ebookImageUrl}
            alt="ebook-image"
            width={336}
            height={595}
            className={twMerge(
              'w-[15rem] h-[30.1875rem] object-cover -rotate-12',
              'xl:w-[21rem] xl:h-[37.1875rem]'
            )}
          />
        </div>

        <RichMaterialsBlogPresentationShape />
      </div>
    </section>
  )
}

export { RichMaterialsBlogPresentation }

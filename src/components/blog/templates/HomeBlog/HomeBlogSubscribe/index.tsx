import { HomeBlogSubscribeImage } from '@/components/blog/atoms/HomeBlog/HomeBlogSubscribeImage'
import { HomeBlogSubscribeShapes } from '@/components/blog/molecules/HomeBlog/HomeBlogSubscribeShapes'
import { HomeBlogSubscribeForm } from '@/components/blog/organisms/HomeBlog/HomeBlogSubscribeForm'
import { Text } from '@/components/generic/atoms/Text'
import { Title } from '@/components/generic/atoms/Title'
import { twMerge } from 'tailwind-merge'

const HomeBlogSubscribe = (): JSX.Element => {
  return (
    <section className="w-full py-12 bg-primary-100 overflow-hidden">
      <div className="mx-auto max-w-container1920 relative">
        <div
          className={twMerge(
            'wrapperContainer max-w-container1328 flex gap-20 z-[1]',
            'lg:items-center'
          )}
        >
          <div
            className={twMerge(
              'flex flex-col gap-6 max-w-[39rem] mx-auto',
              'lg:'
            )}
          >
            <Title
              tag="h2"
              className={twMerge(
                'text-2xl text-neutral-70 leading-[1.12] font-ZonaPro',
                'md:text-5xl',
                'lg:text-4xl',
                'xl:text-5xl'
              )}
            >
              Fique por dentro das últimas notícias imobiliárias com nossos
              artigos em destaque.
            </Title>

            <Text
              tag="p"
              className={twMerge(
                'text-sm text-neutral-70 font-semibold',
                'md:text-base'
              )}
            >
              Nossos artigos em destaque ou populares trazem informações
              relevantes sobre o mundo imobiliário, mantendo você atualizado e
              informado.
            </Text>

            <HomeBlogSubscribeForm />
          </div>

          <HomeBlogSubscribeImage />
        </div>

        <HomeBlogSubscribeShapes />
      </div>
    </section>
  )
}

export { HomeBlogSubscribe }

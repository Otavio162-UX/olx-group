import { Text } from '@/components/generic/atoms/Text'
import { Title } from '@/components/generic/atoms/Title'
import { twMerge } from 'tailwind-merge'

const HomeMainOlxGroupTitles = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-6 mx-auto max-w-[48rem]">
      <Title tag="h2" variant="sectionTitle">
        Conectamos todos os brasileiros a novas formas de consumir e fazer
        negócio.
      </Title>

      <Text
        tag="p"
        className={twMerge(
          'text-base text-neutral-130 text-center',
          'lg:text-lg'
        )}
      >
        Somos uma empresa 100% digital, com tecnologia desenvolvida localmente,
        que ajuda nossos usuários a comprar e vender de maneira rápida, segura e
        conveniente.
      </Text>
    </div>
  )
}

export { HomeMainOlxGroupTitles }

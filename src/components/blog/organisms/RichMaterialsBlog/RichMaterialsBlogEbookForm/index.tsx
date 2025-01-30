'use client'

import { Button } from '@/components/generic/atoms/Button'
import { Text } from '@/components/generic/atoms/Text'
import { Title } from '@/components/generic/atoms/Title'
import { InputFull } from '@/components/generic/molecules/InputFull'
import { SelectFull } from '@/components/generic/molecules/SelectFull'
import { richMaterialsBlogEbookFormId } from '@/utils/RichMaterialsBlo'
import { twMerge } from 'tailwind-merge'
import { generateInputsToEbookForm } from './functions/generateInputsToEbookForm'
import { generateSelectsToEbookForm } from './functions/generateSelectsToEbookForm'
import { useRichMaterialsBlogEbookForm } from './hooks/useRichMaterialsBlogEbookForm'
import { IRichMaterialsBlogEbookForm } from './RichMaterialsBlogEbookForm.interface'

const RichMaterialsBlogEbookForm = ({
  ebookName,
}: IRichMaterialsBlogEbookForm): JSX.Element => {
  const {
    blogType,
    name,
    setName,
    email,
    setEmail,
    organization,
    setOrganization,
    position,
    setPosition,
    wayOfWorking,
    setWayOfWorking,
    handleSubmit,
    error,
    loading,
  } = useRichMaterialsBlogEbookForm()

  const inputs = generateInputsToEbookForm({
    name,
    setName,
    email,
    setEmail,
    organization,
    setOrganization,
    error,
  })

  const selects = generateSelectsToEbookForm({
    position,
    setPosition,
    wayOfWorking,
    setWayOfWorking,
    error,
  })

  return (
    <form
      onSubmit={handleSubmit}
      className={twMerge(
        blogType,
        'w-full max-w-[38.5rem] border-8 border-theme-blog-color-60 p-6 rounded-2xl flex flex-col gap-4 shadow-[0px_12px_16px_#1A1D2316]'
      )}
      id={richMaterialsBlogEbookFormId}
    >
      <div className="flex flex-col gap-2">
        <Title
          tag="h3"
          className={twMerge(
            'text-2xl text-neutral-130 font-semibold text-center',
            'lg:text-[2rem]'
          )}
        >
          Baixe agora o E-book &quot;{ebookName}&quot;
        </Title>

        <Text
          tag="p"
          className={twMerge(
            'text-base text-neutral-80 text-center px-2',
            'lg:text-xl'
          )}
        >
          Para fazer o download do material, basta responder o formulário
          abaixo.
        </Text>
      </div>

      <div className="flex flex-col gap-8">
        {inputs.map((input) => (
          <InputFull key={input.id} {...input} />
        ))}

        {selects.map((select) => (
          <SelectFull key={select.id} {...select} />
        ))}
      </div>

      <Button
        type="submit"
        size="large"
        className="mt-6 bg-theme-blog-secondary-color-100 hover:bg-theme-blog-secondary-color-110 active:bg-theme-blog-secondary-color-110"
        loading={loading}
      >
        Baixar meu e-book
      </Button>
    </form>
  )
}

export { RichMaterialsBlogEbookForm }

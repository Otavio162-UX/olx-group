'use client'

import { useGetBlogType } from '@/hooks/blog/useGetBlogType'
import { TBlogVariants } from '@/types/global'
import { Dispatch, FormEvent, SetStateAction, useState } from 'react'
import { z } from 'zod'
import { IErrorStateEbookForm } from '../RichMaterialsBlogEbookForm.interface'
import { richMaterialsBlogEbookFormSchema } from '../schema/richMaterialsBlogEbookFormSchema'
import { richMaterialsBlogEbookFormProps } from '../variables/richMaterialsBlogEbookFormProps'

interface IReturnUseRichMaterialsBlogEbookForm {
  blogType: TBlogVariants
  name: string
  setName: Dispatch<SetStateAction<string>>
  email: string
  setEmail: Dispatch<SetStateAction<string>>
  organization: string
  setOrganization: Dispatch<SetStateAction<string>>
  position: string
  setPosition: Dispatch<SetStateAction<string>>
  wayOfWorking: string
  setWayOfWorking: Dispatch<SetStateAction<string>>
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void
  error: IErrorStateEbookForm
  loading: boolean
}

export const useRichMaterialsBlogEbookForm =
  (): IReturnUseRichMaterialsBlogEbookForm => {
    const blogType = useGetBlogType()

    const { initialErrorState } = richMaterialsBlogEbookFormProps

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [organization, setOrganization] = useState('')
    const [position, setPosition] = useState('')
    const [wayOfWorking, setWayOfWorking] = useState('')
    const [error, setError] = useState<IErrorStateEbookForm>(initialErrorState)
    const [loading, setLoading] = useState(false)

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      try {
        richMaterialsBlogEbookFormSchema.parse({
          name,
          email,
          organization,
          position,
          wayOfWorking,
        })

        setLoading(true)
        setError(initialErrorState)
        console.log(
          name.trim(),
          email.trim(),
          organization.trim(),
          position,
          wayOfWorking
        )

        setTimeout(() => setLoading(false), 1000)
      } catch (error) {
        if (error instanceof z.ZodError) {
          const formattedErrors = error.errors.reduce((acc, item) => {
            const object = {
              ...acc,
              [item.path[0]]: item.message,
            } as IErrorStateEbookForm

            return object
          }, {}) as IErrorStateEbookForm

          setError(formattedErrors)
        }
      }
    }

    return {
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
    }
  }

'use client'

import { useGetBlogType } from '@/hooks/blog/useGetBlogType'
import { TBlogVariants } from '@/types/global'
import { Dispatch, FormEvent, SetStateAction, useState } from 'react'
import { z } from 'zod'
import { homeBlogSubscribeToNewsellerSchema } from '../schema/homeBlogSubscribeToNewsellerSchema'

interface IReturnUseSubscribeToNewseller {
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void
  email: string
  setEmail: Dispatch<SetStateAction<string>>
  error: string | null
  loading: boolean
  blogType: TBlogVariants
}

export const useSubscribeToNewseller = (): IReturnUseSubscribeToNewseller => {
  const blogType = useGetBlogType()

  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      homeBlogSubscribeToNewsellerSchema.parse({ email })
      setLoading(true)
      console.log('E-mail válido:', email)

      setError(null)
      setTimeout(() => setLoading(false), 1000)
    } catch (err) {
      if (err instanceof z.ZodError) setError(err.errors[0].message)
    }
  }

  return { handleSubmit, email, setEmail, error, loading, blogType }
}

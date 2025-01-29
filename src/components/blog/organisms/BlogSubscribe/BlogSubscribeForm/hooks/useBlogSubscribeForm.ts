'use client'

import { useGetBlogType } from '@/hooks/blog/useGetBlogType'
import { TBlogVariants } from '@/types/global'
import { FormEvent, useState } from 'react'
import { z } from 'zod'
import { blogSubscribeFormSchema } from '../schema/blogSubscribeFormSchema'

interface IReturnUseHomeBlogSubscribeForm {
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void
  email: string
  setEmail: (value: string) => void
  error: string | null
  loading: boolean
  blogType: TBlogVariants
}

export const useBlogSubscribeForm = (): IReturnUseHomeBlogSubscribeForm => {
  const blogType = useGetBlogType()

  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      blogSubscribeFormSchema.parse({ email })
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

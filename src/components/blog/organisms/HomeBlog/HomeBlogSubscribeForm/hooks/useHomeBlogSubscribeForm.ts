'use client'

import { FormEvent, useState } from 'react'
import { z } from 'zod'
import { homeBlogSubscribeFormSchema } from '../schema/homeBlogSubscribeFormSchema'

interface IReturnUseHomeBlogSubscribeForm {
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void
  email: string
  setEmail: (value: string) => void
  error: string | null
  loading: boolean
}

export const useHomeBlogSubscribeForm = (): IReturnUseHomeBlogSubscribeForm => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      homeBlogSubscribeFormSchema.parse({ email })
      setLoading(true)
      console.log('E-mail válido:', email)

      setError(null)
      setTimeout(() => setLoading(false), 1000)
    } catch (err) {
      if (err instanceof z.ZodError) setError(err.errors[0].message)
    }
  }

  return { handleSubmit, email, setEmail, error, loading }
}

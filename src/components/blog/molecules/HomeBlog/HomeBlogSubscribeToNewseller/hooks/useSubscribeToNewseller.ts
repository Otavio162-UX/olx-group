'use client'

import { FormEvent, useState } from 'react'
import { z } from 'zod'
import { homeBlogSubscribeToNewsellerSchema } from '../schema/homeBlogSubscribeToNewsellerSchema'

export const useSubscribeToNewseller = () => {
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

  return { handleSubmit, email, setEmail, error, loading }
}

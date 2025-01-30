'use client'

import { Dispatch, FormEvent, SetStateAction, useState } from 'react'
import { z } from 'zod'
import { blogReceiveOurNewsSchema } from '../schema/blogReceiveOurNewsSchema'

interface IReturnUseBlogReceiveOurNewsProps {
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void
  email: string
  setEmail: Dispatch<SetStateAction<string>>
  error: string | null
  loading: boolean
}

export const useBlogReceiveOurNewsProps =
  (): IReturnUseBlogReceiveOurNewsProps => {
    const [email, setEmail] = useState('')
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      try {
        blogReceiveOurNewsSchema.parse({ email })
        setLoading(true)
        console.log('E-mail válido:', email.trim())

        setError(null)
        setTimeout(() => setLoading(false), 1000)
      } catch (err) {
        if (err instanceof z.ZodError) setError(err.errors[0].message)
      }
    }

    return { handleSubmit, email, setEmail, error, loading }
  }

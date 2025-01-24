import { z } from 'zod'

export const homeBlogSubscribeFormSchema = z.object({
  email: z
    .string()
    .email({ message: 'E-mail inválido' })
    .min(8, { message: 'Mínimo de 8 caracteres' })
    .max(100, { message: 'Máximo de 100 caracteres' }),
})

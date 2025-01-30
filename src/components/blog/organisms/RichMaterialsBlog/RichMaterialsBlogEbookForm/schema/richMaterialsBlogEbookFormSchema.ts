import { z } from 'zod'

export const richMaterialsBlogEbookFormSchema = z.object({
  name: z
    .string()
    .min(6, { message: 'Mínimo de 6 caracteres' })
    .max(100, { message: 'Máximo de 100 caracteres' }),
  email: z
    .string()
    .min(8, { message: 'Mínimo de 8 caracteres' })
    .max(100, { message: 'Máximo de 100 caracteres' })
    .email({ message: 'E-mail inválido' }),
  organization: z
    .string()
    .refine(
      (value) => {
        if (value && value.length < 3) return false
        return true
      },
      { message: 'Mínimo de 3 caracteres' }
    )
    .refine(
      (value) => {
        if (value && value.length > 100) return false
        return true
      },
      { message: 'Máximo de 100 caracteres' }
    ),
  position: z.string(),
  wayOfWorking: z.string(),
})

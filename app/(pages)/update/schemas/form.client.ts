import { removeFormatCpf } from '@/app/utils/format'
import { z } from 'zod'

export type RegisterClient = z.infer<typeof recordIndividualSchema>

export const recordIndividualSchema = z.object({
  cpf: z
    .string()
    .min(14)
    .max(14)
    .refine((value) => removeFormatCpf(value).length <= 11, {
      message: 'CPF deve ter no máximo 11 dígitos',
    }),
  data_nascimento: z.string().min(6),
  email: z.string().email(),
  genero: z.string().min(4),
  nome: z.string().min(3),
  telefone: z.string().min(3),
})

import { z } from "zod";

export type RegisterClient = z.infer<typeof recordIndividualSchema>
const isNumeric = (input:any) => /^[0-9]+$/.test(input);

export const recordIndividualSchema = z.object({
  cpf: z
  .string()
  .min(8)
  .refine((value) => isNumeric(value), {
    message: 'O CPF deve conter apenas números.',
  }),
  data_nascimento: z.string().min(6),
  email: z.string().email(),
  genero: z.string().min(4),
  nome: z.string().min(3).max(20),
  sobrenome: z.string().min(3).max(20),
});
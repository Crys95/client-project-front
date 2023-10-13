"use client";

import { motion } from "framer-motion";
import { useForm } from 'react-hook-form'
import { z } from "zod";
import { useRouter } from 'next/navigation'
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "react-query";
import axios from "axios";
import { RequestClient } from "./types";

export const recordIndividualSchema = z.object({
  cpf: z.string().min(8),
  data_nascimento: z.string().min(6),
  email: z.string().email(),
  genero: z.string().min(4),
  nome: z.string().min(3).max(20),
  sobrenome: z.string().min(3).max(20),
});
type RegisterClient = z.infer<typeof recordIndividualSchema>

export const PageIntro = () => {
  const { push } = useRouter()
  const mutation = useMutation(async (data: RequestClient) => {
    const response = await axios.post('http://127.0.0.1:8000/api/client/client-create', data);
    return response.data;  
  },
  {onSuccess: () => {push('/')}}
  );

  const { handleSubmit, register} = useForm<RegisterClient>({
    resolver: zodResolver(recordIndividualSchema)
  })
  const onSubmit = (data: RequestClient) => {
    mutation.mutate(data)
  }
  return (
    <section className="w-full bg-hero-image h-[450px] lg:h-[630px] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-2">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        exit={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center"
      >
        <form className="w-full max-w-lg flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
          <input 
          {...register('nome')}
          placeholder="nome" 
          className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-500 pl-3 text-gray-50"/>
          <input 
          {...register('sobrenome')}
          placeholder="sobrenome"  
          className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-500 pl-3 text-gray-50"/>
          <input 
          {...register('cpf')}
          placeholder="cpf"  
          className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-500 pl-3 text-gray-50"/>
          <input 
          {...register('email')}
          placeholder="email"  
          className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-500 pl-3 text-gray-50"/>
          <input 
          {...register('genero')}
          placeholder="genero"  
          className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-500 pl-3 text-gray-50"/>
          <input 
          {...register('data_nascimento')}
          placeholder="data de nascimento" 
          className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-500 pl-3 text-gray-50"/>

          <div className="flex items-center justify-center">
            <button
              className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Registrar
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

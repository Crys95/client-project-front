'use client'
import { useRouter } from 'next/navigation'
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "react-query";
import { useForm } from 'react-hook-form'
import { RequestClient } from '../types/types';
import { RegisterClient, recordIndividualSchema } from '../schemas/form.client';
import { api } from '@/services/api';
import { formatCPF } from '@/app/utils/format';

export function useClinet() {
    const { push } = useRouter()
    const RegisterClient = useMutation(async (data: RequestClient) => {
      const response = await api.post('/client/client-create', data);
      return response.data;  
    },
    {onSuccess: () => {push('/')}}
    );
  
    const { handleSubmit, register, setValue ,formState: { errors }} = useForm<RegisterClient>({
      resolver: zodResolver(recordIndividualSchema)
    })
    const onSubmit = (data: RequestClient) => {
      RegisterClient.mutate(data)
    }

    const handleFormatMask = (value: string) => {
      const valueWithOutMask = value.replaceAll('-', '').replaceAll('.','')
      const isDocument = valueWithOutMask.length === 11
      if(isDocument){
        return setValue('cpf', formatCPF(value))
      }

      setValue('cpf', valueWithOutMask)
      
    }

  return {
    errors,
    handleSubmit,
    register,
    onSubmit,
    handleFormatMask
  }
}
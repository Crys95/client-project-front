'use client'
import { useRouter } from 'next/navigation'
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "react-query";
import { useForm } from 'react-hook-form'
import axios from "axios";
import { RequestClient } from '../types/types';
import { RegisterClient, recordIndividualSchema } from '../schemas/form.client';

export function useClinet() {
    const { push } = useRouter()
    const RegisterClient = useMutation(async (data: RequestClient) => {
      const response = await axios.post('http://127.0.0.1:8000/api/client/client-create', data);
      return response.data;  
    },
    {onSuccess: () => {push('/')}}
    );
  
    const { handleSubmit, register, formState: { errors }} = useForm<RegisterClient>({
      resolver: zodResolver(recordIndividualSchema)
    })
    const onSubmit = (data: RequestClient) => {
      RegisterClient.mutate(data)
    }

  return {
    errors,
    handleSubmit,
    register,
    onSubmit,
  }
}
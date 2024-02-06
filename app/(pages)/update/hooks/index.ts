'use client'
import { useRouter, useParams } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQuery } from 'react-query'
import { useForm } from 'react-hook-form'
import { RequestClient } from '../types/types'
import { RegisterClient, recordIndividualSchema } from '../schemas/form.client'
import { api } from '@/services/api'
import { formatCPF, formatPhone } from '@/app/utils/format'
import { useEffect } from 'react'

export function useUpdate() {
  const { push } = useRouter()
  const RegisterClient = useMutation(
    async (data: RequestClient) => {
      const response = await api.put('/client/client-update', data)
      return response.data
    },
    {
      onSuccess: () => {
        push('/')
      },
    },
  )
  const { id } = useParams()

  const Client = async () => {
    const response = await api.get<RequestClient>(
      `/client/client-consultation`,
      { params: { id } },
    )
    setValue('cpf', response.data.cpf)
    setValue('data_nascimento', response.data.data_nascimento)
    setValue('email', response.data.email)
    setValue('genero', response.data.genero)
    setValue('nome', response.data.nome)
    setValue('telefone', response.data.telefone)
    return response.data
  }

  useEffect(() => {
    Client()
  }, [id])

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<RegisterClient>({
    resolver: zodResolver(recordIndividualSchema),
  })
  const onSubmit = (data: RequestClient) => {
    RegisterClient.mutate(data)
  }

  const handleFormatMask = (value: string) => {
    const valueWithOutMask = value.replaceAll('-', '').replaceAll('.', '')
    const isDocument = valueWithOutMask.length === 11
    if (isDocument) {
      return setValue('cpf', formatCPF(value))
    }

    setValue('cpf', valueWithOutMask)
  }

  const handleFormatPhone = (value: string) => {
    const valueWithOutMask = value.replaceAll('-', '').replaceAll('.', '')
    const isDocument = valueWithOutMask.length === 11
    if (isDocument) {
      return setValue('telefone', formatPhone(value))
    }

    setValue('telefone', valueWithOutMask)
  }

  return {
    errors,
    handleSubmit,
    register,
    onSubmit,
    handleFormatMask,
    handleFormatPhone,
  }
}

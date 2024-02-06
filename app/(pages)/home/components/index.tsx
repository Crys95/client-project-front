'use client'

import { motion } from 'framer-motion'
import { useClinetHome } from '../hooks'
import { formatCPF, formatDate, formatPhone } from '@/app/utils/format'
import { BsTrash3Fill } from 'react-icons/bs'
import { FaRegEdit } from 'react-icons/fa'

export const HomeCLient = () => {
  const { data, DeleteClient, push } = useClinetHome()

  return (
    <section className="w-full bg-hero-image h-full bg-gray-200 lg:h-[630px] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-2">
      <div className="container rounded">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full"
        >
          <table className="min-w-full border border-gray-600 text-gray-600">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b-gray-600">Nome</th>
                <th className="py-2 px-4 border-b-gray-600">CPF</th>
                <th className="py-2 px-4 border-b-gray-600">data nascimento</th>
                <th className="py-2 px-4 border-b-gray-600">email</th>
                <th className="py-2 px-4 border-b-gray-600">genero</th>
                <th className="py-2 px-4 border-b-gray-600">Telefone</th>
                <th className="py-2 px-4 border-b-gray-600">Editar</th>
                <th className="py-2 px-4 border-b-gray-600">Excluir</th>
              </tr>
            </thead>
            <tbody>
              {data?.data?.map((item) => (
                <tr key={item.cpf} className="text-gray-600">
                  <td className="py-2 px-4 border-b-gray-600 text-center">
                    {item.nome}
                  </td>
                  <td className="py-2 px-4 border-b-gray-600 text-center">
                    {formatCPF(item.cpf)}
                  </td>
                  <td className="py-2 px-4 border-b-gray-600 text-center">
                    {formatDate(item.data_nascimento)}
                  </td>
                  <td className="py-2 px-4 border-b-gray-600 text-center">
                    {item.email}
                  </td>
                  <td className="py-2 px-4 border-b-gray-600 text-center">
                    {item.genero}
                  </td>
                  <td className="py-2 px-4 border-b-gray-600 text-center">
                    {formatPhone(item.telefone)}
                  </td>
                  <td className="py-2 px-4 border-b-gray-600 text-center">
                    <div
                      onClick={() => push(`update/${item.id}`)}
                      className="flex justify-center items-center cursor-pointer"
                    >
                      <FaRegEdit color="#04f704" />
                    </div>
                  </td>
                  <td className="py-2 px-4 border-b-gray-600 text-center">
                    <div
                      onClick={() => DeleteClient.mutate({ id: item.id })}
                      className="flex justify-center items-center cursor-pointer"
                    >
                      <BsTrash3Fill color="#e73030" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  )
}

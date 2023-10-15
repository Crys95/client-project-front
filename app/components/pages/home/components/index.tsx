"use client"

import { motion } from 'framer-motion';
import { useClinetHome } from '../hooks';
import { formatCPF, formatDate } from '@/app/utils/format';
import { BsTrash3Fill } from 'react-icons/bs'

export const HomeCLient = () => {

  const { data, DeleteClient } = useClinetHome()

  return (
    <section className="w-full bg-hero-image h-full lg:h-[630px] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-2">
      <div className="container rounded">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full"
        >
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Nome</th>
                <th className="py-2 px-4 border-b">CPF</th>
                <th className="py-2 px-4 border-b">data nascimento</th>
                <th className="py-2 px-4 border-b">email</th>
                <th className="py-2 px-4 border-b">genero</th>
                <th className="py-2 px-4 border-b">Excluir</th>
              </tr>
            </thead>
            <tbody>
              {data?.data?.map(item => (
                <tr key={item.cpf} className='bg-gray-800 '>
                  <td className="py-2 px-4 border-b text-center">{`${item.nome} ${item.sobrenome}`}</td>
                  <td className="py-2 px-4 border-b text-center">{formatCPF(item.cpf)}</td>
                  <td className="py-2 px-4 border-b text-center">{formatDate(item.data_nascimento)}</td>
                  <td className="py-2 px-4 border-b text-center">{item.email}</td>
                  <td className="py-2 px-4 border-b text-center">{item.genero}</td>
                  <td className="py-2 px-4 border-b text-center">
                    <div onClick={() => DeleteClient.mutate({ id: item.id })} className='flex justify-center items-center cursor-pointer'><BsTrash3Fill color='#e73030' /></div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
};


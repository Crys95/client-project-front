"use client"

import { motion } from 'framer-motion';
import axios from 'axios';
import { useQuery } from 'react-query';
import { IResponseClient } from '../types';

export const HeroSection = () => {
  const Client = async () => {
    try {
      const response = await axios.get<IResponseClient>('http://127.0.0.1:8000/api/client/');
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar os dados:', error);
      throw new Error('Ocorreu um erro ao buscar os dados.');
    }
  };

  const { data } = useQuery('clientKay', Client);


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
              </tr>
            </thead>
            <tbody>
              {data?.data?.map(item => (
                <tr key={item.cpf} className='bg-gray-800 '>
                  <td className="py-2 px-4 border-b text-center">{item.nome}</td>
                  <td className="py-2 px-4 border-b text-center">{item.cpf}</td>
                  <td className="py-2 px-4 border-b text-center">{item.data_nascimento}</td>
                  <td className="py-2 px-4 border-b text-center">{item.email}</td>
                  <td className="py-2 px-4 border-b text-center">{item.genero}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
};


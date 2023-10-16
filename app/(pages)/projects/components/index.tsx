"use client";
import { motion } from "framer-motion";
import { useClinet } from "../hooks";

export const Register = () => {
  const { handleSubmit, onSubmit, register, errors, handleFormatMask } = useClinet();

  return (
    <section className="w-full bg-hero-image h-[450px] lg:h-[630px] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-2">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        exit={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center"
      >
        <form
          className="w-full max-w-lg flex flex-col gap-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex gap-3">
            <div className="flex flex-col">
              <input
                {...register("nome")}
                placeholder="nome"
                className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-500 pl-3 text-gray-50"
              />
              {errors.nome && (
                <span className="text-red-600">menos de 3 caracteres</span>
              )}
            </div>
            <div className="flex flex-col">
              <input
                {...register("sobrenome")}
                placeholder="sobrenome"
                className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-500 pl-3 text-gray-50"
              />
              {errors.nome && (
                <span className="text-red-600">menos de 3 caracteres</span>
              )}
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex flex-col">
              <input
                {...register("cpf")}
                onChange={(value) => handleFormatMask(value.target.value)}
                type="text"
                maxLength={14}
                placeholder="cpf"
                className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-500 pl-3 text-gray-50"
              />
              {errors.cpf && <span className="text-red-600">cpf invalido</span>}
            </div>
            <div className="flex flex-col">
              <input
                {...register("email")}
                placeholder="email"
                className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-500 pl-3 text-gray-50"
              />
              {errors.email && (
                <span className="text-red-600">email invalido</span>
              )}
            </div>
          </div>
            <div className="flex flex-col">
              <select
                {...register("genero")}
                className="w-full h-14 bg-gray-800 rounded-lg pl-3 text-gray-50"
              >
                <option value="">Selecione o gênero</option>
                <option value="MASCULINO">Masculino</option>
                <option value="FEMININO">Feminino</option>
                <option value="OUTRO">outro</option>
              </select>
              {errors.genero && (
                <span className="text-red-600">selecione um genero</span>
              )}
            </div>
            <div className="flex flex-col">
              <input
                {...register("data_nascimento")}
                placeholder="data de nascimento"
                type="date"
                className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-500 pl-3 text-gray-50"
              />
              {errors.data_nascimento && (
                <span className="text-red-600">informe a data</span>
              )}
            </div>
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

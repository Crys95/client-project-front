"use client";
import axios from "axios";
import { IResponseClient, RequestClientDelet } from "../types/types";
import { useMutation, useQuery } from "react-query";

export function useClinetHome() {

  const Client = async () => {
    try {
      const response = await axios.get<IResponseClient>(
        "http://127.0.0.1:8000/api/client/"
      );
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar os dados:", error);
      throw new Error("Ocorreu um erro ao buscar os dados.");
    }
  };

  const { data, refetch } = useQuery("clientKay", Client);

  const DeleteClient = useMutation(
    async (data: RequestClientDelet) => {
      const response = await axios.delete(
        "http://127.0.0.1:8000/api/client/client-delete",
        { data }
      );
      return response.data;
    },
    {
      onSuccess: () => {
        refetch();
      },
    }
  );

  return {
    DeleteClient,
    data,
  };
}

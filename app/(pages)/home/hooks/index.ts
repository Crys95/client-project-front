"use client";
import { IResponseClient, RequestClientDelet } from "../types/types";
import { useMutation, useQuery } from "react-query";
import { api } from "@/services/api";

export function useClinetHome() {

  const Client = async () => {
    try {
      const response = await api.get<IResponseClient>(
        "/client"
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
      const response = await api.delete(
        "/client/client-delete",
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

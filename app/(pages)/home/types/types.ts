export interface itens {
  id: number
  cpf: string
  data_nascimento: string
  email: string
  genero: string
  telefone: string
  nome: string
}

export interface IResponseClient {
  data: [itens]
}

export interface RequestClientDelet {
  id: number
}

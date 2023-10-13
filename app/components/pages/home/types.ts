export interface itens {
  cpf: string
  data_nascimento: string
  email: string
  genero: string
  nome: string
  sobrenome: string
}

export interface IResponseClient {
  data: [itens]
}

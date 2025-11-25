export type UsuarioResponse = {
  email: string;
  role: string;
  CPF?: string;
  id: number;
  nome:string;
  telefone?:string;
  dataNascimento?:string
  genero?:string;
}
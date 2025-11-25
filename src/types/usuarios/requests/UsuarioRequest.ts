export type UsuarioRequest = {
  nome:string;
  email: string;
  senha: string;
  cPF?: string;
  telefone?:number;
  dataNascimento?:string;
  genero?:string;
}
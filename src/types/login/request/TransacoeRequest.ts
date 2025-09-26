import type { TipoTransacao } from "../../../utis/api/enum/transacao/TipoTransacao";

export type TransacaoRequest = {
  descricao:string;
  valor: number;
  data: string;
  tipo:TipoTransacao;
}
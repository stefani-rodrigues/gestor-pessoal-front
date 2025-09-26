import type { TipoTransacao } from "../../../utis/api/enum/transacao/TipoTransacao";

export type TransacaoResponse = {
  id: number;
  descricao:string;
  valor: number;
  data: string;
  tipo:TipoTransacao;
}
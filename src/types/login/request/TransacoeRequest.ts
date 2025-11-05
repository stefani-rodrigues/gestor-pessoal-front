import type { TipoTransacaoEnum } from "../../../utis/api/enum/transacao/TipoTransacaoEnum";

export type TransacaoRequest = {
  descricao:string;
  valor: number;
  data: string;
  tipo:TipoTransacaoEnum;
}
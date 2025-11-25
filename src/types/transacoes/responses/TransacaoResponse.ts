import type { TipoTransacaoEnum} from "../../../utis/api/enum/transacao/TipoTransacaoEnum";


export type TransacaoResponse = {
  id: number;
  descricao:string;
  valor: number;
  data: string;
  tipo:TipoTransacaoEnum;
  categoriaId?: number | null;
  categoriaNome?: string | null;
  cor?: string | null;
}

export type SomaPorTipoResponse = {
  tipo: string;
  total: number;
};

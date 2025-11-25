import type { TipoTransacaoEnum } from "../../../utis/api/enum/transacao/TipoTransacaoEnum";

export interface ListarTrasacoesDaSemanaResponse  {
    id:number,
    valor:number,
    tipo:TipoTransacaoEnum,
    data:string,
    descricao:string,
    categoriaId?:number,
    categoriaNome?: string;
    cor?:string;
}
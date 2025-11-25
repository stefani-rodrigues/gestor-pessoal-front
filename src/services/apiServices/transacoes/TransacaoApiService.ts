import type { TransacaoRequest } from "../../../types/transacoes/requests/TransacoeRequest";
import type { SomaPorTipoResponse, TransacaoResponse } from "../../../types/transacoes/responses/TransacaoResponse";
import type { ListarTrasacoesDaSemanaResponse } from "../../../types/transacoes/responses/ListarTrasacoesDaSemanaResponse";
import type { TipoTransacaoEnum } from "../../../utis/api/enum/transacao/TipoTransacaoEnum";
import { RequisicoesBasesService } from "../bases/RequisicoesBasesService";

export default class TransacaoApiService extends RequisicoesBasesService {
  constructor() {
    super("transacoes"); // Define a controller
  }
  
  async CriarNovaTrasacaoAsync(request:TransacaoRequest) : Promise<TransacaoResponse> {
    const response = await this.post<TransacaoResponse>({
      url: `${this.controller}`,
      body: request
    });
    
    return response;
  }
  
  async ListarTrasacoesAsync(mes?: number,ano?:number, tipo?: TipoTransacaoEnum): Promise<TransacaoResponse[]> {
    const url = mes
      ? `${this.controller}?mes=${mes}&ano=${ano}${tipo ?`&tipo=${tipo}` : ""}`
      : `${this.controller}`;

    const response = await this.get<TransacaoResponse[]>({
      url: url
    });

    return response;
}

  async ListarTrasacoesRecentesPorSemanaAsync(): Promise<ListarTrasacoesDaSemanaResponse[]> {
      const response = await this.get<ListarTrasacoesDaSemanaResponse[]>({
        url: `${this.controller}/semana`
      });

      return response;
  }

  async buscarTotalPorTipo (tipo:string,mes:number, ano:number):Promise<SomaPorTipoResponse[]>{
      const url = `${this.controller}/totalPorTipo?tipo=${tipo}&mes=${mes}&ano=${ano}`;

    const response = await this.get<SomaPorTipoResponse[]>({
      url:url
    });
      return response;
  }

    
  
     async BuscarTrasacoesPorIdAsync(id:number) : Promise<TransacaoResponse> {
        const response = await this.get<TransacaoResponse>({
          url: `${this.controller}/${id}`,
          
        });
        
        return response;
    }


    async AtualizarTransacaoPorIdAsyn(id:number, request:TransacaoRequest) : Promise<TransacaoResponse>{
      const response = await this.put<TransacaoResponse>({
       url: `${this.controller}/${id}`,
       body: request
      });
      return response;
    }

    

    async RemoverTransacaoPorIdAsyn(id:number) : Promise<TransacaoResponse>{
      const response = await this.delete<TransacaoResponse>({
       url: `${this.controller}/${id}`,
      });
      return response;
    }


  } 
  
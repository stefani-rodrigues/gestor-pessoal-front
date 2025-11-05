import type { TransacaoRequest } from "../../../types/login/request/TransacoeRequest";
import type { TransacaoResponse } from "../../../types/login/response/TransacaoResponse";
import { RequisicoesBasesService } from "../bases/RequisicoesBasesService";

export default class TransacaoApiService extends RequisicoesBasesService {
    constructor() {
      super("transicoes"); // Define a controller
    }
    
    async CriarNovaTrasacaoAsync(request:TransacaoRequest) : Promise<TransacaoResponse> {
        const response = await this.post<TransacaoResponse>({
            url: `${this.controller}`,
            body: request
        });
        
        return response;
    }
    
    async ListarTrasacoesAsync() : Promise<TransacaoResponse[]> {
        const response = await this.get<TransacaoResponse[]>({
          url: `${this.controller}`
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
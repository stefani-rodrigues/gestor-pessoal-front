import type { CategoriaRequest } from "../../../types/categoria/requests/CategoriaRequest";
import type { CategoriaResponse } from "../../../types/categoria/responses/CategoriaResponse";
import { RequisicoesBasesService } from "../bases/RequisicoesBasesService";

export default class CategoriaApiService extends RequisicoesBasesService {
    constructor() {
      super("categoria"); // Define a controller
    }
    
    async CriarNovaCategoriaAsync(request:CategoriaRequest) : Promise<CategoriaResponse> {
        const response = await this.post<CategoriaResponse>({
            url: `${this.controller}`,
            body: request
        });
        
        return response;
    }
    
    async ListarCategoriaAsync() : Promise<CategoriaResponse[]> {
        const response = await this.get<CategoriaResponse[]>({
          url: `${this.controller}`
        });
        
        return response;
    }
     async BuscarCategoriaPorIdAsync(id:number) : Promise<CategoriaResponse> {
        const response = await this.get<CategoriaResponse>({
          url: `${this.controller}/${id}`,
          
        });
        
        return response;
    }


    async AtualizarCategoriaPorIdAsyn(id:number, request:CategoriaRequest) : Promise<CategoriaResponse>{
      const response = await this.put<CategoriaResponse>({
       url: `${this.controller}/${id}`,
       body: request
      });
      return response;
    }

    

    async RemoverCategoriaPorIdAsyn(id:number) : Promise<CategoriaResponse>{
      const response = await this.delete<CategoriaResponse>({
       url: `${this.controller}/${id}`,
      });
      return response;
    }

    
  }
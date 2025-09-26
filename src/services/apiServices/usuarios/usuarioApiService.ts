import type { UsuarioRequest } from "../../../types/login/request/UsuarioRequest";
import type { UsuarioResponse } from "../../../types/login/response/UsuarioResponse";
import { RequisicoesBasesService } from "../bases/RequisicoesBasesService";

export default class UsuarioApiService extends RequisicoesBasesService {
    constructor() {
      super("usuarios"); // Define a controller
    }
    
    async CriarNovoUsuarioAsync(request:UsuarioRequest) : Promise<UsuarioResponse> {
        const response = await this.post<UsuarioResponse>({
            url: `${this.controller}`,
            body: request
        });
        
        return response;
    }
  }
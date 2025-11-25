import type { UsuarioRequest } from "../../../types/usuarios/requests/UsuarioRequest";
import type { UsuarioResponse } from "../../../types/usuarios/responses/UsuarioResponse";
import type { AlterarPerfilUsuarioRequest } from "../../../types/usuarios/requests/alterarPerfilUsuarioRequest";
import type { AlterarPerfilUsuarioResponse } from "../../../types/usuarios/responses/AlterarPerfilUsuarioResponse";
import { RequisicoesBasesService } from "../bases/RequisicoesBasesService";

export default class UsuarioApiService extends RequisicoesBasesService {
    constructor() {
      super("usuarios"); // Define a controller
    }
    
    async CriarNovoUsuarioAsync(request:UsuarioRequest) : Promise<UsuarioResponse> {

        const response = await this.post<UsuarioResponse>({
            url: `${this.controller}`,
            body: JSON.stringify(request),
            tituloCarregamento:"Criando usuário",
            tituloSucesso:"Usuário criado com sucesso!"
        });
        
        return response;
    }

    async CarregarUsuarioIdAsync(id:number) : Promise<UsuarioResponse> {

        const response = await this.get<UsuarioResponse>({
          url: `${this.controller}/${id}`
        });
        
      return response;
    }
    
    async AlterarPerfilUsuarioAsync(id:number, request: AlterarPerfilUsuarioRequest) : Promise<AlterarPerfilUsuarioResponse> {

        const response = await this.put<AlterarPerfilUsuarioResponse>({
          url: `${this.controller}/${id}`,
          body: request
        });
        
      return response;
    }
  }
import type { LoginRequest } from "../../../types/login/request/LoginRequest";
import type { LoginResponse } from "../../../types/login/response/LoginResponse";
import { RequisicoesBasesService } from "../bases/RequisicoesBasesService";


export default class LoginApiService extends RequisicoesBasesService {
    constructor() {
      super("auth"); // Define o endpoint base
    }
    
    async LoginAsync(request:LoginRequest) : Promise<LoginResponse> {
        const response = await this.post<LoginResponse>({
            url: `${this.controller}/login`,
            body: request,
            tituloCarregamento : "Carregando...",
            tituloSucesso : "Login efetuado com sucesso!"
        });
        
        return response;
    }
  }
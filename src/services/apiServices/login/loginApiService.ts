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

    async Registrarnovasenha(email: string, novaSenha:string,token:string) {
        const response = await this.post({
            url: `${this.controller}/redefinirsenha`,
            body: {
              senha: novaSenha,
              email: email,
              token:token,
            },
            tituloCarregamento : "Carregando...",
            tituloSucesso : "Senha alterada com sucesso!"
        });
        
        return response;
    }

       async Redefinirnovasenha(email: string, novaSenha:string,token:string) {
        const response = await this.post({
            url: `${this.controller}/redefinirsenha`,
            body: {
              senha: novaSenha,
              email: email,
              token:token,
            },
            tituloCarregamento : "Carregando...",
            tituloSucesso : "Senha alterada com sucesso!"
        });
        
        return response;
    }

     async EsqueciMinhaSenha(email: string) {
        const response = await this.post({
            url: `${this.controller}/esqueciminhasenha`,
            body: {
              email: email
            },
            tituloCarregamento : "Enviando código...",
            tituloSucesso : "Código enviado para seu e-mail!"
            
        });
        
        return response;
    }
     

    
  }

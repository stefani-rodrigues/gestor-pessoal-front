import { createContext, useEffect, useState } from "react";
import api from "../../utis/api/Api";
import { parseCookies, destroyCookie } from "nookies";
import LoginApiService from "../../services/apiServices/login/loginApiService";

interface AuthContextData {
  fazerLogin: (email: string,senha:string) => Promise<void>;
  deslogar: () => void;
  token: string | null;
}

interface AuthProviderProps {
  children: React.ReactNode;
}
 const AuthContext = createContext({} as AuthContextData);


export function AuthProvider({children}:AuthProviderProps){
    const[token,setToken] = useState<string| null>(null);
    const loginApi = new LoginApiService();

    useEffect(() => {
        const { "meugestorpessoal.token": token } = parseCookies();
        setToken(token);
        if (!token) {
          localStorage.clear();
          setToken(null);
        }
    }, []);

    function setAuthorizationToken(token: string | null) {
        api.defaults.headers["Authorization"] = token
        ? token.replace(/"/g, "")
        : null;
    }

    async function fazerLogin(email: string,senha:string) {
        const retorno = await loginApi.LoginAsync(formData);
    } 
  
    function deslogar() {
        destroyCookie(undefined, "meugestorpessoal.token");
        setToken(null);
        setAuthorizationToken(null);
    }

  return (
    <AuthContext.Provider
      value={{
        fazerLogin,
        token,
        deslogar
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

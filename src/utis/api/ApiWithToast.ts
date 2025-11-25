import type { AxiosRequestConfig } from 'axios';
import api from './Api';
import { toast } from 'react-hot-toast';
import axios from 'axios';

interface props {
    url: string;
}

export interface propsGet extends props {
  config?: AxiosRequestConfig<unknown> | undefined
  
}

export interface propsDelete extends props {
  config?: AxiosRequestConfig<unknown> | undefined
  tituloCarregamento?: string;
  tituloSucesso?: string;
}


export interface propsCompleto extends props {
    body?: unknown;
    tituloCarregamento?: string;
    tituloSucesso?: string;
    config?:AxiosRequestConfig<unknown> | undefined
}
function getErrorMessage(error: unknown) {
  if (axios.isAxiosError(error)) {
    return (
      error.response?.data?.message || 
      error.response?.data?.erro ||    
      error.response?.data ||           
      error.message                      
    );
  }
 
  return error instanceof Error ? error.message : "Erro inesperado";
}
export async function post<T = unknown>({
    url,
    body,
    tituloCarregamento = 'Salvando...',
    tituloSucesso = "Salvo com sucesso!"
}: propsCompleto) {

  return toast.promise(
    api.post<T>(url, body, {
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res.data)
    .catch((error:unknown) => {
         throw new Error(getErrorMessage(error));
    }),
    {
      loading: tituloCarregamento,
      success: tituloSucesso,
      error: (err) => err.message,
    }
  );
}


export async function put<T = unknown>({
    url,
    body,
    tituloCarregamento = 'Salvando...',
    tituloSucesso = "Salvo com sucesso!"
}:propsCompleto) {
  return toast.promise(
    api.put<T>(url, body)
    .then(res => res.data)
    .catch((error) => {
      throw new Error(getErrorMessage(error)); 
    }),
    {
      loading: tituloCarregamento,
      success: tituloSucesso,
      error: (err) => err.message,
    }
  );
}

export async function get<T = unknown>({ url }:props) {
  try {
    const response = await api.get<T>(url);
    return response.data;

  } catch (err: unknown) {
    throw new Error(getErrorMessage(err));
    throw err;
  }
}

export async function _delete<T = unknown>({
  url,
  tituloCarregamento = 'Removendo...',
  tituloSucesso = "Removido com sucesso!"
}: propsDelete) {

  return toast.promise(
    api.delete<T>(url)
      .then(res => res.data)
      .catch((error) => {
       throw new Error(getErrorMessage(error));
      }),
    {
      loading: tituloCarregamento,
      success: tituloSucesso,
      error: (err) => err.message,
    }
  );
}

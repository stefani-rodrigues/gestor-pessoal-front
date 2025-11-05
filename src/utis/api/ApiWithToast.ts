import type { AxiosRequestConfig } from 'axios';
import api from './Api';
import { toast } from 'react-hot-toast';

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
}

export async function post<T = unknown>({
    url,
    body,
    tituloCarregamento = 'Salvando...',
    tituloSucesso = "Salvo com sucesso!"
}:propsCompleto) {
  return toast.promise(
    api.post<T>(url, body)
    .then(res => res.data)
    .catch((error) => {
      throw new Error(error.response.data.erro);
    }),
    {
      loading: tituloCarregamento,
      success: tituloSucesso,
      error: (err) => {
        return err.message;
      },
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
      throw new Error(error.response.data.erro);
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
    toast.error("Erro ao buscar dados");
    throw err;
  }
}

export async function _delete<T = unknown>({
    url,
    tituloCarregamento = 'Removendo...',
    tituloSucesso = "Removido com sucesso!"
}:propsDelete) {
  return toast.promise(
    api.delete<T>(url)
    .then(res => res.data)
    .catch((error) => {
      throw new Error(error.response.data.erro);
    }),
    {
      loading: tituloCarregamento,
      success: tituloSucesso,
      error: (err) => err.message,
    }
  );
}

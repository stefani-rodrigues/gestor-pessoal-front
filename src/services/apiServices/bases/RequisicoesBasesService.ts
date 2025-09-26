import { get, post, put, type propsCompleto, type propsGet } from "../../../utis/api/ApiWithToast";


export class RequisicoesBasesService {
  protected readonly post: <T = unknown>({ url, body, tituloCarregamento, tituloSucesso }: propsCompleto) => Promise<T>;
  protected readonly put: <T = unknown>({ url, body, tituloCarregamento, tituloSucesso }: propsCompleto) => Promise<T>;
  protected readonly get: <T = unknown>({ url, config }: propsGet) => Promise<T>;
  protected readonly controller: string;

  constructor(controller: string) {
    this.post = post; 
    this.put = put;
    this.get = get;


    this.controller = controller;
  }
}

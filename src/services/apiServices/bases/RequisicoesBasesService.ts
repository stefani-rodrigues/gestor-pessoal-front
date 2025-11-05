import { get, post, put, _delete, type propsCompleto, type propsGet, type propsDelete } from "../../../utis/api/ApiWithToast";


export class RequisicoesBasesService {
  protected readonly post: <T = unknown>({ url, body, tituloCarregamento, tituloSucesso }: propsCompleto) => Promise<T>;
  protected readonly put: <T = unknown>({ url, body, tituloCarregamento, tituloSucesso }: propsCompleto) => Promise<T>;
  protected readonly get: <T = unknown>({ url, config }: propsGet) => Promise<T>;
  protected readonly delete: <T = unknown>({ url, tituloCarregamento, tituloSucesso, config }: propsDelete) => Promise<T>;
  protected readonly controller: string;

  constructor(controller: string) {
    this.post = post; 
    this.put = put;
    this.get = get;
    this.delete = _delete;


    this.controller = controller;
  }
}

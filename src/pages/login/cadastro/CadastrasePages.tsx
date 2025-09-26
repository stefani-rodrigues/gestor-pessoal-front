import { useState } from "react";
import type { UsuarioRequest } from "../../../types/login/request/UsuarioRequest";
import CadastrasePagesView from "./CadastrasePagesView";
import UsuarioApiService from "../../../services/apiServices/usuarios/usuarioApiService";


export default function CadastrasePages() {

  const [formData, setFormData] = useState<UsuarioRequest>({
      nome: "",
      email: "",
      senha: "",
    });

  const usuarioApiService = new UsuarioApiService();

  function handleChange (event: React.ChangeEvent<HTMLInputElement>) {
     const { name, value } = event.target;
    setFormData((prevSate) => ({
      ...prevSate,
      [name]: value,
    }));
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    await usuarioApiService.CriarNovoUsuarioAsync(formData);
  }

  return (
    <CadastrasePagesView
    formData={formData}
     handleChange={handleChange}
    handleSubmit={handleSubmit}
    />
   
  )
}



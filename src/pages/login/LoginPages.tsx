import { useState } from "react";
import type { LoginRequest } from "../../types/login/request/LoginRequest";
import LoginApiService from "../../services/apiServices/login/loginApiService";
import LoginPagesView from "../login/LoginPagesView";



export default function LoginPages() {
  const [formData, setFormData] = useState<LoginRequest>({
    email: "",
    senha: "",
  });
  const loginApi = new LoginApiService();

 

  function handleChange (event: React.ChangeEvent<HTMLInputElement>) {
     const { name, value } = event.target;
    setFormData((prevSate) => ({
      ...prevSate,
      [name]: value,
    }));
  };
  

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const retorno = await loginApi.LoginAsync(formData);

    console.log(retorno);
  }

  return (
    <LoginPagesView
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      formData={formData}
      />
  )
}


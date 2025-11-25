import { useState } from "react";
import type { LoginRequest } from "../../types/login/request/LoginRequest";
import LoginApiService from "../../services/apiServices/login/loginApiService";
import LoginPagesView from "../login/LoginPagesView";
import { useDispatch } from "react-redux";
import { loginSucesso } from "../../redux/authSlice";
import { useNavigate } from "react-router-dom";




export default function LoginPages() {
  const [formData, setFormData] = useState<LoginRequest>({
    email: "",
    senha: "",
  });
  const loginApi = new LoginApiService();
  const dispatch = useDispatch();
  const navigator = useNavigate();

  function handleChange (event: React.ChangeEvent<HTMLInputElement>) {
     const { name, value } = event.target;
    setFormData((prevSate) => ({
      ...prevSate,
      [name]: value,
    }));
  };
  

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
   event.preventDefault();
        
 try {

      const loginResponse = await loginApi.LoginAsync(formData);
     
      if (loginResponse && loginResponse) {

        dispatch(loginSucesso({
          token: loginResponse.token,
          usuario: {
            id: loginResponse.id,
            email: loginResponse.email,
            nome: loginResponse.nome
          }
        }));

        navigator("/");
    
      }

    } catch (error) {
      console.error( error);
      
       
    }
}
  return (
    <LoginPagesView
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      formData={formData}
      />
  )
}


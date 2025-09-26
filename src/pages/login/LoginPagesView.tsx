import { Link } from "react-router-dom";
import type { LoginRequest } from "../../types/login/request/LoginRequest";



type props ={
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmit(event: React.FormEvent<HTMLFormElement>): void;
  formData:LoginRequest;
}

export default function LoginPagesView({handleChange,handleSubmit,formData}:props){

    return (
      <div className="d-flex align-items-center min-vh-100 ">
      <div
        className= "card shadow p-4" 
        style={{ maxWidth: "400px", width: "400px",marginLeft:"65%",height:"500px" }}>
        <h2 className="text-center mb-5">Faça seu Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              placeholder="Informe o seu email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Senha
            </label>
            <input
              type="password"
              className="form-control"
              id="senha"
              placeholder=" Informe sua senha"
              required
              name="senha"
              value={formData.senha}
              onChange={handleChange}
            />
          </div>
          <div className="d-grid mb-4 gap-2 ">
            <button type="submit" className="btn btn-primary ">
              Entrar
            </button>
          </div>
          <p className="text-center ">
            Não possui conta?
            <Link to="/auth/cadastro"> Cadastre-se agora</Link>
          </p>
        </form>
      </div>
    </div>
    )
}
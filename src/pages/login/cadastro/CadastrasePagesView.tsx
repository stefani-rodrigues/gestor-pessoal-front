import { Link } from "react-router-dom";

import type { UsuarioRequest } from "../../../types/login/request/UsuarioRequest";
type props ={
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmit(event: React.FormEvent<HTMLFormElement>): void;
  formData:UsuarioRequest;
}

export default function CadastrasePagesView ({formData,handleChange,handleSubmit}:props){
  return(
    <div className="d-flex align-items-center min-vh-100">
      <div
        className="card shadow p-4"
        style={{ maxWidth: "400px", width: "400px",marginLeft:"65%",height:"500px" }}
      >
        <h2 className="text-center mb-5">Crie sua Conta</h2>

      <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="nome" className="form-label"> Nome Completo</label>
            <input
              type="text"
              className="form-control"
              id="nome"
              name="nome"
              value={formData.nome}
              placeholder="Informe seu nome completo"
              required
               onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              placeholder="seu.email@exemplo.com"
              required
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
              id="password"
              placeholder="Crie uma senha"
              required
              name="senha"
              value={formData.senha}
              onChange={handleChange}
            />
          </div>

          <div className="d-grid mb-4">
            <button type="submit" className="btn btn-success">
              Cadastrar
            </button>
          </div>

          <p className="text-center mb-0">
            Já possui conta?            
            <Link to="/auth/login"> Faça login</Link>
          </p>
        </form>
      </div>
    </div>
  )
}
import { Link } from "react-router-dom";

import type { UsuarioRequest } from "../../../types/usuarios/requests/UsuarioRequest";
type props ={
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmit(event: React.FormEvent<HTMLFormElement>): void;
  formData:UsuarioRequest;
}

export default function CadastrasePagesView ({formData,handleChange,handleSubmit}:props){
  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100">
      <div
        className="card shadow p-4"
        style={{ width: "100%", maxWidth: "450px" ,marginLeft:"65%"}}
      >
        <h2 className="text-center mb-4">Crie sua Conta</h2>

        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label htmlFor="nome" className="form-label">Nome Completo</label>
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
            <label htmlFor="email" className="form-label">Email</label>
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
            <label htmlFor="cpf" className="form-label">CPF</label>
            <input
              type="text"
              className="form-control"
              id="cpf"
              name="CPF"
              value={formData.CPF}
              placeholder="000.000.000-00"
              required
              onChange={handleChange}
            />
          </div>

         
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Senha</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="senha"
              value={formData.senha}
              placeholder="Crie uma senha"
              required
              onChange={handleChange}
            />
          </div>

        
          <div className="d-grid mb-3">
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
  );
  
}
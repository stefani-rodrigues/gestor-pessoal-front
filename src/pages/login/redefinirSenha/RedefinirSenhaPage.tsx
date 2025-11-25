import {  useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import LoginApiService from "../../../services/apiServices/login/loginApiService";

export default function RedefinirSenhaPage() {
  const { state } = useLocation();
  const email = state?.email ?? "";
    const navigate = useNavigate();
  const [token, setToken] = useState("");
  const [novaSenha, setNovaSenha] = useState("");

  const api = new LoginApiService();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    await api.Redefinirnovasenha(email,novaSenha, token);
    navigate("/auth/login");
  }

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100">
      <div className="card shadow p-4" style={{ width: "100%", maxWidth: "450px" ,marginLeft:"65%"}}>
        <h3 className="text-center mb-3">Redefinir Senha</h3>

        <form onSubmit={handleSubmit}>
          <label>Código recebido no email</label>
          <input
            type="text"
            className="form-control mb-3"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            required
          />

          <label>Nova senha</label>
          <input
            type="password"
            className="form-control mb-3"
            value={novaSenha}
            onChange={(e) => setNovaSenha(e.target.value)}
            required
          />

          <button className="btn btn-success w-100">
            Redefinir senha
          </button>
        </form>
      </div>
    </div>
  );
}

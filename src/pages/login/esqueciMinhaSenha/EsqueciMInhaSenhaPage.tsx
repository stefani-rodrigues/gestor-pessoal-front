import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginApiService from "../../../services/apiServices/login/loginApiService";

export default function EsqueciMinhaSenhaPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const api = new LoginApiService();
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      await api.EsqueciMinhaSenha(email);

      navigate("/auth/redefinirsenha", {
        state: { email }
      });

    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100">
      <div
        className="card shadow p-4"
        style={{ width: "100%", maxWidth: "450px" ,marginLeft:"65%"}}
      >
        <h3 className="text-center mb-3">Esqueci Minha Senha</h3>

        <form onSubmit={handleSubmit}>
          <label>Email cadastrado</label>
          <input
            type="email"
            className="form-control mb-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button
            className="btn btn-primary w-100"
            disabled={loading}
          >
            {loading ? "Enviando..." : "Enviar código"}
          </button>
        </form>
      </div>
    </div>
  );
}

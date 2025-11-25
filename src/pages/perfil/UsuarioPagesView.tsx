import { FaRegEdit } from "react-icons/fa";
import type { UsuarioResponse } from "../../types/usuarios/responses/UsuarioResponse";
import BotaoComponent from "../../components/bases/botao/BotaoComponet";
import AlterarSenhaUsuarioModal from "../../components/usuarios/modal/alterarSenhaUsuarioModal";

type Props = {
  usuario: UsuarioResponse | null;
  alterarInputsFormu(e: React.ChangeEvent<HTMLInputElement>): void;
  alterarGeneroForm(e: React.ChangeEvent<HTMLSelectElement>): void;
  onSalvar(): void;
  exibirModalAlterarSenhaUsuario: boolean;
  setExibirModalAlterarSenhaUsuario: (value: boolean) => void;

};

export default function UsuarioPagesView({ usuario, exibirModalAlterarSenhaUsuario, onSalvar, alterarInputsFormu, alterarGeneroForm, setExibirModalAlterarSenhaUsuario }: Props) {
  
  if (!usuario) return <div className="p-4 text-center">Carregando perfil...</div>;

  return (
    <div className=" mt-1">
      <h3 className="mb-4 fw-bold">Dados Pessoais</h3>
      
      <form className="row m-2 g-3 "style={{ maxWidth: '800px', margin: 'auto'}}>

        <div className="col-md-6">
          <label htmlFor="nome" className="form-label">Nome Completo</label>
          <input
              type="text"
              className="form-control"
              id="nome"
              defaultValue={usuario.nome} 
              name="nome"
              onChange={alterarInputsFormu}
          />
        </div>

         <div className="col-md-6">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              defaultValue={usuario.email}
              disabled
              onChange={alterarInputsFormu}
            />
        </div>

        <div className="col-md-6">
          <label htmlFor="telefone" className="form-label">Telefone</label>
          <input 
            type="text" 
            className="form-control" 
            id="telefone"
            name="telefone"
            defaultValue={usuario.telefone} 
            onChange={alterarInputsFormu}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="CPF" className="form-label">CPF</label>
          <input 
            type="text" 
            className="form-control" 
            id="CPF" 
            name="CPF"
            defaultValue={usuario.CPF} 
            onChange={alterarInputsFormu}
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="dataNascimento" className="form-label">Data de nascimento</label>
          <input 
             type="date" 
             className="form-control" 
             id="dataNascimento" 
             name="dataNascimento" 
             defaultValue={usuario.dataNascimento?.split('T')[0]} 
              onChange={alterarInputsFormu}
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="genero" className="form-label">Gênero</label>
          <select 
            id="genero" 
            className="form-select"
            defaultValue={usuario.genero ?? ""}
            onChange={alterarGeneroForm}
          >
            <option value="">Selecione...</option>
            <option value="FEMININO">Feminino</option>
            <option value="MASCULINO">Masculino</option>
            <option value="OUTRO">Outro</option>
          </select>
        </div>
        <div className="col-md-6">
          <label htmlFor="senha" className="form-label">Senha</label>
          <div className="input-group">
              <input
                type="password"
                className="form-control"
                id="senha"
                placeholder="******"
                disabled
              />
            <span className="input-group-text">
              <FaRegEdit style={{ cursor: "pointer" }} 
                onClick={() => setExibirModalAlterarSenhaUsuario(true)}
              />
            </span>
          </div>
        </div>

      </form>

      <div style={{marginTop: '20px'}}>
          <BotaoComponent 
            tipo="button"
            titulo="Salvar"
            variante="salvar"
            onClick={onSalvar}
          />
        </div>

      <AlterarSenhaUsuarioModal 
        email={usuario.email}
        fechar={() => setExibirModalAlterarSenhaUsuario(false)}
        mostrar={exibirModalAlterarSenhaUsuario}
      />
    </div>
  );
}
import ModalComponent from "../../bases/modal/ModalComponent";


type Props = {
    novaSenha: string;
    mostrar: boolean;
    onSalvar: () => void;
    onChangeNovaSenha: (e: React.ChangeEvent<HTMLInputElement>) => void;
    fechar: () => void;
};

export default function AlterarSenhaUsuarioModalView({
    mostrar,
    novaSenha,
    fechar,
    onChangeNovaSenha,
    onSalvar
}: Props) {
  return (
    <ModalComponent
      titulo="Alterar Senha"
      mostrar={mostrar}
      fechar={fechar}
      salvar={onSalvar}
    >
      <form className="row g-3">
        <div className="col-md-6" style={{width: '100%'}}>
          <label htmlFor="senha" className="form-label">Nova Senha</label>
          <input
            type="password"
            className="form-control form-control-sm"
            style={{width: '100%'}}
            id="senha"
            name="senha"
            value={novaSenha}
            onChange={onChangeNovaSenha}
            required
          />
        </div>
      </form>
    </ModalComponent>
  );
}

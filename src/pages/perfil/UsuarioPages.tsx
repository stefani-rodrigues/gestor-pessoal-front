import UsuarioPagesView from "./UsuarioPagesView";
import UsuarioApiService from "../../services/apiServices/usuarios/usuarioApiService";
import { useEffect, useState } from "react";
import type { UsuarioResponse } from "../../types/usuarios/responses/UsuarioResponse";
import type { RootState } from "../../redux/store";
import { useSelector } from "react-redux";


export default function UsuarioPages() {

  const usuarioApiService = new UsuarioApiService();
  const [usuario, setUsuario] = useState<UsuarioResponse | null>(null);
  const idUsuarioLogado = useSelector((state: RootState) => state.auth.usuario?.id );
  const [exibirModalAlterarSenhaUsuario, setExibirModalAlterarSenhaUsuario] = useState<boolean>(false);

  useEffect(() => {
    if (idUsuarioLogado) {
      CarregarUsuario(idUsuarioLogado);
    }
  }, [idUsuarioLogado]);

  async function CarregarUsuario(id: number) {
    try {
      const response = await usuarioApiService.CarregarUsuarioIdAsync(id);

      if (response) {
        setUsuario(response);
      }
    } catch (error) {
      console.error(
        error
      );
    }
  }

  function alterarGeneroForm(e: React.ChangeEvent<HTMLSelectElement>) {
    setUsuario((prev) => ({
      ...prev!,
      genero: e.target.value,
    }));
  }

  function alterarInputsFormu(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setUsuario((prev) => ({
      ...prev!,
      [name]: value,
    }));
  }

  async function onSalvar() {
    await usuarioApiService.AlterarPerfilUsuarioAsync(usuario!.id, {
      nome: usuario!.nome,
      CPF: usuario!.CPF,
      dataNascimento: usuario!.dataNascimento,
      genero: usuario!.genero,
      telefone: usuario!.telefone
    })
  }

  return (
    <UsuarioPagesView
      usuario={usuario}
      onSalvar={onSalvar}
      alterarGeneroForm={alterarGeneroForm}
      alterarInputsFormu={alterarInputsFormu}
      exibirModalAlterarSenhaUsuario={exibirModalAlterarSenhaUsuario}
      setExibirModalAlterarSenhaUsuario={setExibirModalAlterarSenhaUsuario}
    />
  );
}

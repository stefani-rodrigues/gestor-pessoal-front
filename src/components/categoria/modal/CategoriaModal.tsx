
import { useEffect, useState } from "react";
import CategoriaModalView from "./CategoriaModalView";
import type { CategoriaResponse } from "../../../types/categoria/responses/CategoriaResponse";
import CategoriaApiService from "../../../services/apiServices/categoria/CategoriaApiService";

type Props = {
  idCategoria: number;
  mostrar: boolean;
  onFechar: () => void;
};
export default function CategoriaModal ({
  idCategoria,
  mostrar,
  onFechar
}:Props){
  const [jaCarregou, setJaCarregou] = useState<boolean>(false)
  const [categoria, setCategoria] = useState<CategoriaResponse>({
    id: 0,
    cor: "#fff",
    nome: ""
  });
  const categoriaApiService = new CategoriaApiService();

  useEffect(() => {
    if(!jaCarregou && mostrar)
      CarregarCategoria();
  }, [idCategoria])

  async function CarregarCategoria(){
    const ret: CategoriaResponse = await categoriaApiService.BuscarCategoriaPorIdAsync(idCategoria);

    setCategoria(ret);
    setJaCarregou(true);
  }

  function AlterarCor(e: React.ChangeEvent<HTMLInputElement>){
    setCategoria({
      ...categoria!,
      cor: e.target.value
    })
  }

  function AlterarNome(e: React.ChangeEvent<HTMLInputElement>){
    setCategoria({
      ...categoria!,
      nome: e.target.value
    })
  }

  async function onSalvar() {
    await categoriaApiService.AtualizarCategoriaPorIdAsyn(idCategoria, {
      id: categoria.id,
      nome: categoria.nome,
      cor: categoria.cor
    });

    limparEFechar();
  }

  function limparEFechar(){
    setCategoria({
      id: 0,
      cor: "#fff",
      nome: ""
    });
    setJaCarregou(false);
    onFechar();
  }


  return (
    <CategoriaModalView
      mostrar={mostrar}
      categoria={categoria}
      fechar={limparEFechar}
      onSalvou={onSalvar}
      AlterarCor={AlterarCor}
      AlterarNome={AlterarNome}
    />
  )
}
import { useEffect, useState } from "react";
import TransacoePageView from "./TransacoePageView";
import type { TransacaoResponse } from "../../types/login/response/TransacaoResponse";
import TransacaoApiService from "../../services/apiServices/transacoes/TransacaoApiService";

export default function TransacoePage() {
  const [transacoes, setTransacoes] = useState<TransacaoResponse[]>([]);
  const [mostrar, setMostrar] = useState(false);


  const transacaoApiService = new TransacaoApiService();

  async function ListarTransacoes() {
    const data = await transacaoApiService.ListarTrasacoesAsync();
    if (data) setTransacoes(data);
  }

  useEffect(() => {
    ListarTransacoes();
  }, []);

  function AbrirEFecharModal() {
    setMostrar((prev) => !prev);
  }

 
   async function handleSalvou() {
    ListarTransacoes();
  }

  return (
    <TransacoePageView
      onAtualizou={ListarTransacoes}
      mostrar={mostrar}
      AbrirEFecharModal={AbrirEFecharModal}
      transacoes={transacoes}
      onSalvou={handleSalvou} 
    />
  );
}

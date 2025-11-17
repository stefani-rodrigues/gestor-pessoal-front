import { useEffect, useState } from "react";
import TransacoePageView from "./TransacoePageView";
import type { TransacaoResponse } from "../../types/login/response/TransacaoResponse";
import TransacaoApiService from "../../services/apiServices/transacoes/TransacaoApiService";

export default function TransacoePage() {
  const [transacoes, setTransacoes] = useState<TransacaoResponse[]>([]);
  const [mostrar, setMostrar] = useState(false);
  const [mesFiltro,setMesFiltro] = useState <number | undefined>(new Date().getMonth()+1);

  const transacaoApiService = new TransacaoApiService();

  async function ListarTransacoes() {
 
    const data = await transacaoApiService.ListarTrasacoesAsync(mesFiltro, new Date().getFullYear());
    if (data) setTransacoes(data);
  }

  useEffect(() => {
    ListarTransacoes();
  }, [mesFiltro]);

  function AbrirEFecharModal() {
    setMostrar((prev) => !prev);
  }

 
   async function handleSalvou() {
    ListarTransacoes();
  }

   function filtroMes(data:Date) {
    const mes = data.getMonth()+1
    setMesFiltro(mes)
  }

  return (
    <TransacoePageView
      onAtualizou={()=> ListarTransacoes()}
      mostrar={mostrar}
      AbrirEFecharModal={AbrirEFecharModal}
      transacoes={transacoes}
      onSalvou={handleSalvou} 
      filtroMes={filtroMes}
    />
  );
}

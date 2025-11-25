import { useEffect, useState } from "react";
import TransacoePageView from "./TransacoePageView";
import TransacaoApiService from "../../services/apiServices/transacoes/TransacaoApiService";
import { useDispatch, useSelector } from "react-redux"; 
import type { RootState } from "../../redux/store";
import {  remover, setTransacoes, type Transacao} from "../../redux/transacao/transacoesSlice";
import type { TipoTransacaoEnum } from "../../utis/api/enum/transacao/TipoTransacaoEnum";


export default function TransacoePage() {
  const [mostrar, setMostrar] = useState(false);
  const [mesFiltro,setMesFiltro] = useState <number | undefined>(new Date().getMonth()+1);
  const transacoesRedux = useSelector((state: RootState) => state.transacoes.transacoes);
  const [itemEmEdicao, setItemEmEdicao] = useState<Transacao | null>(null);
  const dispatch = useDispatch();
  const transacaoApiService = new TransacaoApiService();

 
async function ListarTransacoes() {

        const response = await transacaoApiService.ListarTrasacoesAsync(
            mesFiltro, 
            new Date().getFullYear()
        );

        if (response && response.length > 0) {
            
            const listaformatada: Transacao[] = response.map(item => ({
                ...item,
                categoriaId: item.categoriaId ?? 0,
                categoriaNome: item.categoriaNome ?? "Sem categoria",
                cor: item.cor ?? undefined,
                tipo: item.tipo as TipoTransacaoEnum 
            }));
        
            dispatch(setTransacoes(listaformatada));
        } else {
         
            dispatch(setTransacoes([])); 
          
        }
    }
  useEffect(() => {
    ListarTransacoes();
  }, [mesFiltro]);

   async function handleSalvou() {
    FecharModal();
    ListarTransacoes();
  }

  function handleNovo() {
    setItemEmEdicao(null); 
    setMostrar(true);      
  }

  function OnClickEditar(id: number) {
      const itemEncontrado = transacoesRedux.find(t => t.id === id);
      if (itemEncontrado) {
          setItemEmEdicao(itemEncontrado); 
          setMostrar(true);                
      }
  }

   async function OnClickDeletar(idTransacao:number){
     await transacaoApiService.RemoverTransacaoPorIdAsyn(idTransacao)
      dispatch(remover(idTransacao));
      ListarTransacoes();
  }
  function FecharModal() {
      setMostrar(false);
      setItemEmEdicao(null);
  }

  function filtroMes(data:Date) {
    const mes = data.getMonth()+1
    setMesFiltro(mes)
  }

  return (
    <TransacoePageView
      itemEmEdicao={itemEmEdicao}
      OnAtualizou={()=> ListarTransacoes()}
      mostrar={mostrar}
      FecharModal={FecharModal}
      AbrirParaNovo={handleNovo}
      OnClickEditar={OnClickEditar}
      transacoes={transacoesRedux}
      OnSalvou={handleSalvou} 
      filtroMes={filtroMes}
      OnClickDeletar={OnClickDeletar}
    />
  );
}

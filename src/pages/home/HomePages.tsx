import { useEffect, useState } from "react";
import HomePagesView from "./HomePagesView";
import TransacaoApiService from "../../services/apiServices/transacoes/TransacaoApiService";
import type { RootState } from "../../redux/store";
import type { ListarTrasacoesDaSemanaResponse } from "../../types/transacoes/responses/ListarTrasacoesDaSemanaResponse";
import type { TransacaoResponse } from "../../types/transacoes/responses/TransacaoResponse";
import { useSelector } from "react-redux";
import { TipoTransacaoEnum } from "../../utis/api/enum/transacao/TipoTransacaoEnum";


export default function HomePages (){
    const [receita, setReceita] = useState(0);
    const [depesa, setDespesa] = useState(0);
    const [listaTransacoesRecentes, setListaTransacoesRecentes] = useState<ListarTrasacoesDaSemanaResponse[]>([]);
    const [listaTransacoesDoMes, setListaTransacoesDoMes] = useState<TransacaoResponse[]>([]);
   
    
    const usuarioNome = useSelector((state: RootState) => state.auth.usuario?.nome);

    const transacaoApiService = new TransacaoApiService();

    useEffect(() => {
        CarregarTela();
    }, []);

    async function CarregarTela() {
         await CarregarResumo();
         await ListarTrasacoesRecentesPorSemana();
         await ListarTrasacoesDoMes()
    }

   async function CarregarResumo() {
        const totalReceita = await transacaoApiService.buscarTotalPorTipo("RECEITA", new Date().getMonth() +1, new Date().getFullYear());
        const totalDespesa = await transacaoApiService.buscarTotalPorTipo("DESPESA", new Date().getMonth() +1, new Date().getFullYear());

        if(totalReceita.length>0){
            setReceita(totalReceita[0].total);
        }else{
            setReceita(0)
        }

        if(totalDespesa.length>0){
            setDespesa(totalDespesa[0].total)
        }
        else{
            setDespesa(0)
        } 
    }

    async function ListarTrasacoesRecentesPorSemana() {
        const response : ListarTrasacoesDaSemanaResponse[] = await transacaoApiService.ListarTrasacoesRecentesPorSemanaAsync();

        setListaTransacoesRecentes(response ?? []);
    }
    
    async function ListarTrasacoesDoMes() {
        const response : TransacaoResponse[] = await transacaoApiService.ListarTrasacoesAsync(new Date().getMonth() + 1, new Date().getFullYear(), TipoTransacaoEnum.DESPESA);

        setListaTransacoesDoMes(response ?? []);
    }


    return <HomePagesView
                nomeUsuario={usuarioNome ?? "Usuário"}
                listaTransacoesRecentes={listaTransacoesRecentes}
                listaTransacoesDoMes={listaTransacoesDoMes}
                despesa={depesa}
                receita={receita}
                saldo={receita - depesa}
    />
}
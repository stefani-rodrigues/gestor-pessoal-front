import { useEffect, useState } from "react";
import HomePagesView from "./HomePagesView";
import TransacaoApiService from "../../services/apiServices/transacoes/TransacaoApiService";
import type { TransacaoResponse } from "../../types/login/response/TransacaoResponse";



export default function HomePages (){

    const [receita, setReceita] = useState(0);
    const [depesa, setDespesa] = useState(0);
    const [transacoes, setTransacoes] = useState<TransacaoResponse[]>([]);

    const transacaoApiService = new TransacaoApiService();

    useEffect(() => {
        CarregarTela();
    }, []);

    async function CarregarTela() {
         await CarregarResumo();
         await ListarTransacoes();
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

    async function ListarTransacoes() {
        const response = await transacaoApiService.ListarTrasacoesRecentesPorSemanaAsync();
        if(response) setTransacoes(response)
    }

    return <HomePagesView
        transacoes={transacoes}
        despesa={depesa}
        receita={receita}
        saldo={receita - depesa}
    />
}
import { useState, useEffect } from "react"; 
import FormComponentView from "./FormComponentView"
import type { TransacaoRequest } from "../../../types/login/request/TransacoeRequest";
import TransacaoApiService from "../../../services/apiServices/transacoes/TransacaoApiService";
import { TipoTransacao } from "../../../utis/api/enum/transacao/TipoTransacao";
import TabelaComponent from "../tabela/TabelaComponent";
import type { TransacaoResponse } from "../../../types/login/response/TransacaoResponse";



export default function FormComponent(){
    const [transacoes, setTransacoes] = useState<TransacaoResponse[]>([]);
    const [formData, setFormData] = useState<TransacaoRequest>({
        data: "",
        valor: 0,
        descricao: "",
        tipo: TipoTransacao.RECEITA
    });
    const transacaoApiService = new TransacaoApiService();

    async function fetchTransacoes() {
        setTransacoes([]);
        const data = await transacaoApiService.ListarTrasacoesAsync(); 
        if (data) {
            setTransacoes(data);
        }
    }

    useEffect(() => {
        fetchTransacoes();
    },[]);


    function handleChange (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const response = await transacaoApiService.CriarNovaTrasacaoAsync(formData);

        if (response) {
            setTransacoes([response, ...transacoes]);
        }
    }

    return (
        <> 
            <FormComponentView
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                formData={formData}
            />
        
            <TabelaComponent transacoes={transacoes} />
        </>
    )
}
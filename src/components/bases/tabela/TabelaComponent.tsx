
import TransacaoApiService from "../../../services/apiServices/transacoes/TransacaoApiService";
import type { TransacaoResponse } from "../../../types/login/response/TransacaoResponse";
import TabelaComponentView from "./TabelaComponentView"

type Props = {
    mostrar:boolean;
    transacoes: TransacaoResponse[];
    onAtualizar: () => void
};

export default function TabelaComponent({
    transacoes,
    onAtualizar,
}: Props){
    
    const transacaoApiService = new TransacaoApiService();

   

    async function EditarTransacao (idTransacao:number ){
     await transacaoApiService.BuscarTrasacoesPorIdAsync(idTransacao)
        onAtualizar();
    }

    
    async function DeletarTransacao (idTransacao: number){
      await transacaoApiService.RemoverTransacaoPorIdAsyn(idTransacao);
      onAtualizar();
    }
    

    return(
        <TabelaComponentView
            EditarTransacao={EditarTransacao}
            DeletarTransacao={DeletarTransacao}
            transacoes={transacoes}
        />    
    )
}
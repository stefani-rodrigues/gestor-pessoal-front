import type { TransacaoRequest } from "../../../types/login/request/TransacoeRequest";
import TabelaComponentView from "./TabelaComponentView"

type Props = {
  transacoes: TransacaoRequest[];
};

export default function TabelaComponent({
    transacoes
}: Props){
    return(
        <TabelaComponentView
            transacoes={transacoes}
        />    
    )
}
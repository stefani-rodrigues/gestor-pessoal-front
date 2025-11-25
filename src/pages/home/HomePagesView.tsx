import CardComValorComponet from "../../components/bases/card/CardComValorComponent";
import TabelaTransacoesRecentes from "../../components/transacao/tabelas/TabelaTransacoesRecentes";
import type { TransacaoResponse } from "../../types/transacoes/responses/TransacaoResponse";
import type { ListarTrasacoesDaSemanaResponse } from "../../types/transacoes/responses/ListarTrasacoesDaSemanaResponse";
import GraficoComponent from "./grafico/GraficoComponet";

type Props = {
  receita: number;
  despesa: number;
  saldo: number; 
  listaTransacoesRecentes: ListarTrasacoesDaSemanaResponse[]
  listaTransacoesDoMes: TransacaoResponse[];
  nomeUsuario:string
};
export default function HomePagesView({despesa,receita,saldo, listaTransacoesRecentes,nomeUsuario, listaTransacoesDoMes}:Props) {
  
  return (
 
    <div className=" mb-1">
      <h4 className="fw-bold">Bem-vindo {nomeUsuario}</h4>
      <p className="text-muted">Meu Gestor Pessoal</p>
      <div className="mb-4">
        <span className="fs-4 fw-semibold mb-2">Resumo financeiro do mês</span>
        <div className="row  m-1 gap-5 m">
          <CardComValorComponet nome="Receita" valor={receita}/>
          <CardComValorComponet nome="Despesa" valor={despesa}/>
          <CardComValorComponet nome="Saldo Total" valor={saldo}/>
        </div>
          
      </div>
      <div className="row g-4 mt-2">
        <div className="col-lg-7">
          <span className="fs-4 fw-semibold mb-2 d-block">Transações recentes</span>
          <div className="card" >
            <div className="card-body ">
              <TabelaTransacoesRecentes 
                listaTransacoesRecentes={listaTransacoesRecentes}
              />
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <span className="fs-4 fw-semibold mb-2 d-block">Despesas</span>
          <div className="card">
            <div className="card-body">
              <GraficoComponent dados={listaTransacoesDoMes}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
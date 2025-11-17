import CardComValorComponet from "../../components/bases/card/CardComValorComponent";

import TabelaComponent from "../../components/bases/tabela/TabelaComponent";
import type { TransacaoResponse } from "../../types/login/response/TransacaoResponse";
import GraficoComponent from "./grafico/GraficoComponet";

type Props = {
  receita: number;
  despesa: number;
  saldo: number;
  transacoes: TransacaoResponse[]
};
export default function HomePagesView({despesa,receita,saldo, transacoes}:Props) {

  return (
 
    <div className=" mb-1">
      <h4 className="fw-bold">Bem-vindo Usuário</h4>
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
              <TabelaComponent 
                transacoes={transacoes}
                exibirBotoesDeAcoes={false}
                exibirTotalizadores={false}
              />
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <span className="fs-4 fw-semibold mb-2 d-block">Despesas</span>
          <div className="card">
            <div className="card-body">
              <GraficoComponent dados={transacoes}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
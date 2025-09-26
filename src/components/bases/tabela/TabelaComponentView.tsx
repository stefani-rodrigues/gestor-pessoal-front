
import type { TransacaoRequest } from "../../../types/login/request/TransacoeRequest";


type Props = {
  transacoes: TransacaoRequest[];
};


export default function TabelaComponentView({ transacoes }: Props) {
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h5 className="card-title">Histórico de Transações</h5>
        <div className="table-responsive">
          <table className="table table-striped table-hover table-sm">
            <thead>
              <tr>
                <th>Descrição</th>
                <th>Data</th>
                <th>Tipo</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              
              {transacoes.length > 0 ? (
              
                transacoes.map((transacao) => (
                  <tr key={transacao.data}>
                    <td>{transacao.descricao}</td>
                    <td>
                      {new Date(transacao.data).toLocaleDateString('pt-BR', {
                        timeZone: 'UTC',
                      })}
                    </td>
                    <td>{transacao.tipo}</td>
                    <td>
                      {transacao.valor.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </td>
                  </tr>
                ))
              ) : (
           
                <tr>
                  
                  <td colSpan={4} className="text-center">
                    Nenhuma transação encontrada :(
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
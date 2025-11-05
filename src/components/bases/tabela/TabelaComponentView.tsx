import { MdEdit } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import type { TransacaoResponse } from "../../../types/login/response/TransacaoResponse";



type Props = {
  transacoes: TransacaoResponse[];
  EditarTransacao:(idTransacao:number )=>void;
  DeletarTransacao:(idTransacao: number)=>void;
};


export default function TabelaComponentView({ transacoes,DeletarTransacao,EditarTransacao }: Props) {
  return (
    <div className="card ">
      <div className="card-body">
        <div className="table-responsive" >
          <table className="table table-striped table-hover table-fixed ">
            <thead>
              <tr>
                <th>Descrição</th>
                <th>Data</th>
                <th>Tipo</th>
                <th>Valor</th>
                 <th></th>
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
                    <td>
                      <button  className="border-0 bg-transparent" 
                      onClick={()=>{EditarTransacao(transacao.id) }}
                      >
                        <MdEdit size={"20px"}/>
                        </button> 
                    </td>
                    
                    <td>
                      <button className="border-0 bg-transparent" onClick={() => {DeletarTransacao(transacao.id)}}> <RiDeleteBin5Line  size={"20px"}/></button> 
                    
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  
                  <td colSpan={5} className="text-center">
                    Nenhuma transação encontrada.
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
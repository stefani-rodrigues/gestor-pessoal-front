import { MdEdit } from "react-icons/md";
import type { TransacaoResponse } from "../../../types/login/response/TransacaoResponse";
import { TipoTransacaoEnum } from "../../../utis/api/enum/transacao/TipoTransacaoEnum";
import { RiDeleteBin5Line } from "react-icons/ri";

type Props = {
  transacoes: TransacaoResponse[];
  exibirBotoesDeAcoes: boolean;
  exibirTotalizadores:boolean;
  EditarTransacao: (idTransacao: number) => void;
  DeletarTransacao: (idTransacao: number) => void;
};

export default function TabelaComponentView({
  transacoes,
  DeletarTransacao,
  EditarTransacao,
  exibirBotoesDeAcoes,
  exibirTotalizadores,
}: Props) {
  const totalReceitas = transacoes
    .filter((t) => t.tipo === TipoTransacaoEnum.RECEITA)
    .reduce((acc, t) => acc + t.valor, 0);

  const totalDespesas = transacoes
    .filter((t) => t.tipo === TipoTransacaoEnum.DESPESA)
    .reduce((acc, t) => acc + t.valor, 0);

  const totalGeral = totalReceitas - totalDespesas;

  return (
    <div className="card shadow-sm border-0 ">
      <div className="card-body">
        <div className="table-responsive">
          <table className="table align-middle text-center table-hover ">
            <thead className="table-light">
              <tr>
                <th>Descrição</th>
                <th>Tipo</th>
                <th>Categoria</th>
                <th>Data</th>
                <th>Valor</th>
                {exibirBotoesDeAcoes
                  ? <th></th>
                  : <></> 
                }
              </tr>
            </thead>

            <tbody>
              {transacoes.length > 0 ? (
                transacoes.map((t) => (
                  <tr key={t.id}>
                    
                    <td>{t.descricao}</td>

                 
                    <td>
                      <span
                        className={`fw-semibold ${
                          t.tipo === TipoTransacaoEnum.RECEITA
                            ? "text-success"
                            : "text-danger"
                        }`}
                      >
                        {t.tipo === TipoTransacaoEnum.RECEITA
                          ? "Receita"
                          : "Despesa"}
                      </span>
                    </td>

                  
                    <td>
                      <span
                        className="badge rounded-pill px-3 py-2"
                        style={{
                          backgroundColor: t.cor ?? "#e0e0e0",
                          color: "#ffffffff",
                        }}
                      >
                        {t.categoriaNome ?? "Sem categoria"}
                      </span>
                    </td>

                
                    <td>
                      {new Date(t.data).toLocaleDateString("pt-BR", {
                        timeZone: "UTC",
                      })}
                    </td>

                  
                    <td
                      className={`fw-semibold ${
                        t.tipo === TipoTransacaoEnum.RECEITA
                          ? "text-success"
                          : "text-danger"
                      }`}
                    >
                      {t.valor.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </td>

                
                      
                    {exibirBotoesDeAcoes
                      ? <td className="text-end">
                          <button
                            className="btn btn-sm  me-1"
                            onClick={() => EditarTransacao(t.id)}
                          >
                            <MdEdit size={"20px"}/>
                          </button>
                          <button
                            className="btn btn-sm "
                            onClick={() => DeletarTransacao(t.id)}
                          >
                            <RiDeleteBin5Line size={"20px"} />
                          </button>
                        </td>
                      : <></> 
                    }
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="text-center text-muted py-4">
                    Nenhuma transação encontrada.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

       {exibirTotalizadores
        ? <div
              className="d-flex justify-content-around align-align-items-end-100 px- py-2 rounded mt-3"
              style={{ backgroundColor: "#8b4dff", color: "white" }}
            >
              <span>
                Receita:{" "}
                {totalReceitas.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
              <span>
                Despesa:{" "}
                {totalDespesas.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
              <span>
                Total:{" "}
                {totalGeral.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </div>
        : <></>
       }
        
      </div>
    </div>
  );
}

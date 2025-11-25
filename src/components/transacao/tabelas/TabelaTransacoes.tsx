import { MdEdit } from "react-icons/md";
import type { TransacaoResponse } from "../../../types/transacoes/responses/TransacaoResponse";
import TabelaBaseComponentView from "../../bases/tabela/TabelaBaseComponentView";
import { RiDeleteBin5Line } from "react-icons/ri";


type Props = {
  transacoes: TransacaoResponse[];
  OnClickEditar(idTransacao:number): void;
  OnClickDeletar(idTransacao:number): void
}


export default function TabelaTransacoes ({
    transacoes,
    OnClickDeletar,
    OnClickEditar
}:Props){
     const colunas = ["Descrição", "Tipo", "Categoria", "Data", "Valor",""];
    
        function obterCelulas(){
            const celula: React.JSX.Element[] = [];
        
            transacoes.map((transacao) => {
              const corTransacao = transacao.tipo === 'RECEITA'
                      ? "text-success"
                      : "text-danger";
        
        
              celula.push(<label>{transacao.descricao}</label>);
              celula.push(
                <span className={`fw-semibold ${corTransacao}`}>
                  {transacao.tipo === 'RECEITA'
                    ? "Receita"
                    : "Despesa"}
                </span>
              );
              celula.push(
                <span className="badge rounded-pill px-3 py-2"
                  style={{
                    backgroundColor: transacao.cor ?? "#e0e0e0",
                    color: "#ffffffff",
                  }}
                >
                  {transacao.categoriaNome ?? "Sem categoria"}
                </span>
              );
              celula.push(<>{new Date(transacao.data).toLocaleDateString("pt-BR", { timeZone: "UTC", })}</>);
              celula.push(
                <label className={`fw-semibold  ${corTransacao}`}
                >
                  {
                    transacao.valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
                  }
                </label>
              );

              celula.push(
                <div>
                    <button className="btn btn-sm  me-1"
                        onClick={() => OnClickEditar(transacao.id)}
                    >
                        <MdEdit size={"20px"}/>
                    </button>
                    <button className="btn btn-sm "
                        onClick={() => OnClickDeletar(transacao.id)}
                    >
                        <RiDeleteBin5Line size={"20px"} />
                    </button>
                </div>
              );             
            })
        
            return celula;
          }

        function obterTotalizador() {

            const valorTotalReceitas: number = transacoes.filter((t) => t.tipo ==='RECEITA').reduce((acc, t) => acc + t.valor, 0);
            const totalReceitas: string = valorTotalReceitas.toLocaleString("pt-BR", { style: "currency", currency: "BRL", });
            
            const valorTotalDespesas = transacoes.filter((t) => t.tipo === 'DESPESA').reduce((acc, t) => acc + t.valor, 0);
            const totalDespesas: string = valorTotalDespesas.toLocaleString("pt-BR", { style: "currency", currency: "BRL", });
            const totalGeral: string = (valorTotalReceitas - valorTotalDespesas).toLocaleString("pt-BR", { style: "currency", currency: "BRL", });

            return (
                <div className="d-flex w-100 justify-content-between px-4">
                    <span>{`Receita: ${totalReceitas}`}</span>
                    <span>{`Despesa: ${totalDespesas}`}</span>
                    <span>{`Total: ${totalGeral}`}</span>
                </div>
            )
        }
    
        return <TabelaBaseComponentView
                    colunas={colunas}
                    celulas={obterCelulas()}
                    columnWidths={[]}
                    exibirTotalizadores
                    htmlTotalizador={obterTotalizador()}
                />
}
import type { ListarTrasacoesDaSemanaResponse } from "../../../types/transacoes/responses/ListarTrasacoesDaSemanaResponse";
import TabelaBaseComponentView from "../../bases/tabela/TabelaBaseComponentView";

type Props = {
  listaTransacoesRecentes: ListarTrasacoesDaSemanaResponse[]
};

export default function TabelaTransacoesRecentes({listaTransacoesRecentes}: Props){
    const colunas = ["Descrição", "Tipo", "Categoria", "Data", "Valor"];

    function obterCelulas(){
        const celula: React.JSX.Element[] = [];
    
        listaTransacoesRecentes.map((transacao) => {
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
        })
    
        return celula;
      }

    return <TabelaBaseComponentView
                colunas={colunas}
                celulas={obterCelulas()}
                columnWidths={[]}
            />
}
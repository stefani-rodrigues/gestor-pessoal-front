import type { JSX } from "react";

type Props = {
    colunas: string[];
    celulas: JSX.Element[];
    columnWidths: number[];
    exibirTotalizadores?: boolean;
    htmlTotalizador?: JSX.Element;
};

export default function TabelaBaseComponentView({
    colunas,
    celulas,
    columnWidths,
    htmlTotalizador = <></>,
    exibirTotalizadores = false
}: Props) {


  function obterLinhas():JSX.Element[]{
    const linhas: JSX.Element[] = [];
    
    for(let i = 0; i < celulas.length; i += colunas.length){
        const grupo_celulas = celulas.slice(i, i + colunas.length);

        linhas.push(
            <tr>
                {
                    grupo_celulas.map((celula, key) =><td key={key}  style={{width: `${columnWidths[key] ?? 'auto'}`}}> {celula} </td>)
                }
            </tr>
        )
    }
    return linhas;
  }


  return (
    <div className="card shadow-sm border-0 ">
      <div className="card-body">
        <div className="table-responsive">
          <table className="table align-middle text-center table-hover ">
            <thead className="table-light">
              <tr>
                {
                    colunas.map((coluna, index) => 
                        <th style={{width: `${columnWidths[index] ?? 'auto'}`}}>{coluna}</th>
                    )
                }
              </tr>
            </thead>

            <tbody>
                {
                    obterLinhas().map((linha) => linha)
                }
            </tbody>
          </table>
          {exibirTotalizadores
            ? <div
                  className="d-flex justify-content-around align-align-items-end-100 px- py-2 rounded mt-3"
                  style={{ backgroundColor: "#6a4c93", color: "white" }}
                >
                  {htmlTotalizador}
                </div>
            : <></>
          }
        </div>        
      </div>
    </div>
  );
}

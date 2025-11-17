import type { ChangeEvent } from "react";
import type { TransacaoRequest } from "../../../types/login/request/TransacoeRequest";
import type { CategoriaResponse } from "../../../types/login/response/CategoriaResponse";
import ModalComponent from "../../bases/modal/ModalComponent";
import { TipoTransacaoEnum } from "../../../utis/api/enum/transacao/TipoTransacaoEnum";


type Props = {
  EditarForm: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  SalvarTransacao: () => void;
  formData: TransacaoRequest;
  mostrar: boolean;
  fechar: () => void;
  categorias: CategoriaResponse[];

};

export default function ModalTransacaoView({
  formData,
  mostrar,
  EditarForm,
  SalvarTransacao,
  fechar,
  categorias,

}: Props) {
  return (
    <ModalComponent
      titulo="Adicionar Transação"
      mostrar={mostrar}
      fechar={fechar}
      salvar={SalvarTransacao}
    >
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="descricao" className="form-label">Descrição</label>
          <input
            type="text"
            className="form-control form-control-sm"
            id="descricao"
            name="descricao"
            placeholder="Ex: Salário"
            value={formData.descricao}
            onChange={EditarForm}
            required
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="data" className="form-label">Data</label>
          <input
            type="date"
            className="form-control form-control-sm"
            id="data"
            name="data"
            value={formData.data}
            onChange={EditarForm}
            required
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="tipo" className="form-label">Tipo</label>
          <select
            className="form-select form-select-sm"
            id="tipo"
            name="tipo"
            value={formData.tipo}
            onChange={EditarForm}
          >
            {Object.values(TipoTransacaoEnum).map((tipo, index) => (
              <option key={index} value={tipo}>
                {tipo}
              </option>
            ))}
          </select>
        </div>

     <div className="col-md-6">
        <label htmlFor="categoria" className="form-label">Categoria</label>
        <select
          className="form-select form-select-sm"
          id="categoria"
          name="categoriaId"
          value={formData.categoriaId || ""}
          onChange={EditarForm}
        >
          <option value="">Selecione...</option>

          {categorias.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.nome}
            </option>
          ))}
        </select>
</div>


        <div className="col-md-6">
          <label htmlFor="valor" className="form-label">Valor</label>
          <input
            type="number"
            className="form-control form-control-sm"
            id="valor"
            name="valor"
            placeholder="R$ 0,00"
            value={formData.valor}
            onChange={EditarForm}
            required
          />
        </div>
      </form>
    </ModalComponent>
  );
}

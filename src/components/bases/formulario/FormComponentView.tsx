import type { TransacaoRequest } from "../../../types/login/request/TransacoeRequest";
import { TipoTransacao } from "../../../utis/api/enum/transacao/TipoTransacao";

type props = {

  handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleSubmit(event: React.FormEvent<HTMLFormElement>): void;
  formData: TransacaoRequest;
}

export default function FormComponentView({ handleChange, handleSubmit, formData }: props) {
  return (
    <div className="container mt-4">
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <form className="row g-3 align-items-end" onSubmit={handleSubmit}>

           
            <div className="col-md-2">
              <label htmlFor="descricao" className="form-label">Descrição</label>
              <input type="text" className="form-control form-control-sm" id="descricao" placeholder="Ex: Salário"
                name="descricao"
                value={formData.descricao}
                required
                onChange={handleChange}
              />
            </div>

            <div className="col-md-2">
              <label htmlFor="data" className="form-label">Data</label>
              <input type="date" className="form-control form-control-sm" id="data"
                name="data"
                value={formData.data}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-2">
              <label htmlFor="tipo" className="form-label">Tipo</label>
              <select
                className="form-select form-select-sm"
                id="tipo"
                name="tipo" 
                value={formData.tipo}
                onChange={handleChange}
              >
                {Object.values(TipoTransacao).map((tipo, index) => (
                  <option key={index} value={tipo}>{tipo}</option>
                ))}
              </select>
            </div>

            <div className="col-md-2">
              <label htmlFor="valor" className="form-label">Valor</label>
              <input type="number" className="form-control form-control-sm" id="valor" placeholder="R$ 0,00"
                name="valor" 
                value={formData.valor}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-2 d-grid">
              <button type="submit" className="btn btn-primary btn-sm">Adicionar</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}
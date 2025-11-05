
export default function HomePagesView() {

  return (
 
    <div className=" mb-1">
      <h4 className="fw-bold">Bem-vindo Usuário</h4>
      <p className="text-muted">Meu Gestor Pessoal</p>
      <div className="mb-4">
        <span className="fs-5  mb-2 d-block">Resumo financeiro</span>
      </div>
      <div className="row g-4 mt-3">
        <div className="col-lg-8">
          <span className="fs-5 fw-semibold mb-2 d-block">Transações recentes</span>
          <div className="card">
            <div className="card-body">
              <p>Aqui vai sua tabela ou lista de transações...</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <span className="fs-5 fw-semibold mb-2 d-block">Despesas</span>
          <div className="card">
            <div className="card-body">
              <p>Aqui vai seu gráfico ou resumo de despesas...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
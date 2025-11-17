
import ModalComponent from "../../bases/modal/ModalComponent";

type Props = {
  SalvarMetas:() => void
  mostrar: boolean;
  fechar: () => void;

};
export default function MetaComponentModalView ({fechar,mostrar,SalvarMetas}:Props){
  return(
        <ModalComponent 
            titulo="Adicionar nova meta"
            fechar={fechar}
            mostrar={mostrar}
            salvar={SalvarMetas}
        >
        <form>
        <div className="col">
        <label htmlFor="nome" className="form-label">Nome</label>
        <input
            type="text"
            className="form-control form-control-sm"
            id="nome"
            name="nome" 
        />
        </div>
          <div className="col">
            <label htmlFor="descricao" className="form-label">Descrição</label>
            <input
                type="text"
                className="form-control form-control-sm"
                id="descricao"
                name="descricao" 
            />
         </div >
          <div className="d-flex col-m-2">
            <div >
               <label htmlFor="valorInicial" className="form-label">Valor inicial</label>
            <input
                type="number"
                className="form-control form-control-sm"
                id="valorInicial"
                name="valorInicial" 
            />
            </div>
            <div className="col-m-2">
            <label htmlFor="valorMeta" className="form-label">Valor da meta</label>
            <input
                type="number"
                className="form-control form-control-sm"
                id="valorMeta"
                name="valorMeta" 
            />
         </div>
         </div>
          
        </form>
        </ModalComponent>
  )
   
}
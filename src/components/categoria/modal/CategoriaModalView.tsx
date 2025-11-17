
import InputColorComponent from "../../bases/input/InputColor/InputColorComponent";
import ModalComponent from "../../bases/modal/ModalComponent";
type Props ={
   mostrar: boolean;
   fechar: () => void;

  onSalvou: () => void
}
export default function CategoriaModalView ({fechar,mostrar,onSalvou}:Props){
    return (
        <ModalComponent 
        fechar={fechar}
        mostrar={mostrar}
        titulo="Editar Categoria"
        salvar={onSalvou}        
        >
           <form  className="flex-column p-2 align-items-end" >
                         <div className="col-md-2 p-1">
                           <label htmlFor="nome" className="form-label">Tipo da categoria</label>
                           <input type="text" className="form-control form-control-sm" 
                               id="nome" 
                               name="nome"
                            />
                         </div>
                           <div className="col-md-2 p-1">
                               <InputColorComponent onChange={onSalvou} value=""  />
                           </div>  
            </form>
        </ModalComponent>
    )
}
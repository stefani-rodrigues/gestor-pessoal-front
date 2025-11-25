
import type { CategoriaResponse } from "../../../types/categoria/responses/CategoriaResponse";
import InputColorComponent from "../../bases/input/InputColor/InputColorComponent";
import ModalComponent from "../../bases/modal/ModalComponent";
type Props ={
    categoria: CategoriaResponse;
    mostrar: boolean;
    fechar: () => void;
    onSalvou: () => void;
    AlterarCor(e: React.ChangeEvent<HTMLInputElement>): void;
    AlterarNome(e: React.ChangeEvent<HTMLInputElement>): void;
}
export default function CategoriaModalView ({
    categoria,
    mostrar,
    fechar,
    onSalvou,
    AlterarCor,
    AlterarNome
}:Props){
    return (
        <ModalComponent 
        fechar={fechar}
        mostrar={mostrar}
        titulo="Editar Categoria"
        salvar={onSalvou}        
        >
           <form  className="flex-column p-2 align-items-end" >
                <div className="col-md-6 p-1">
                    <label htmlFor="nome" className="form-label">Tipo da categoria</label>
                    <input type="text" className="form-control form-control-sm" 
                        id="nome" 
                        name="nome"
                        value={categoria.nome}
                        onChange={AlterarNome}
                    />
                </div>
                <div className="col-md-6 p-1">
                    <InputColorComponent 
                        value={categoria.cor}  
                        onChange={AlterarCor} 
                    />
                </div>  
            </form>
        </ModalComponent>
    )
}
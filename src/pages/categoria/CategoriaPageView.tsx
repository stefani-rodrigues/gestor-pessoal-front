import type { CategoriaRequest } from "../../types/login/request/CategoriaRequest";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import InputColorComponent from "../../components/bases/input/InputColor/InputColorComponent";
import BotaoComponent from "../../components/bases/botao/BotaoComponet";
import { CircleFadingPlusIcon } from "lucide-react";
import type { ChangeEvent } from "react";
import type { CategoriaResponse } from "../../types/login/response/CategoriaResponse";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";

type props ={
  EditarForm: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  formData:CategoriaRequest;
  CriarCategoria(event: React.FormEvent<HTMLFormElement>): void;
  categorias:CategoriaResponse [];
  EditarCategoria:(IdCategoroia:number) => void
  DeletarCategoria:(IdCategoria:number) => void
}

export default function CategoriaPageView({EditarForm,formData,CriarCategoria,categorias,EditarCategoria,DeletarCategoria}:props){
  
    return(
      
          <div className=" mb-1 ">
            <form  className="flex-column p-2 align-items-end" onSubmit={CriarCategoria}>
              <div className="col-md-2 p-1">
                <label htmlFor="nome" className="form-label">Tipo da categoria</label>
                <input type="text" className="form-control form-control-sm" 
                    id="nome" 
                    name="nome"
                    value={formData.nome}
                    onChange={EditarForm}/>
              </div>
                <div className="col-md-2 p-1">
                    <InputColorComponent value ={formData.cor} onChange={EditarForm}/>
                </div> 
              <div className="col-md- p-2">
              <BotaoComponent icone ={<CircleFadingPlusIcon/>} titulo="Adicionar Categoria"  tipo="submit" variante="add" />
            </div>
            </form>
            <div className="table-responsive">
             <h6 className="mb-3">Lista de categorias</h6>
                <table className="table align-middle">
                <tbody>
                {categorias.map((categoria) => (
            <tr key={categoria.id}>
              <td style={{ width: "200px" }}>
                <span
                  className="badge text-write px-3 py-2"
                  style={{
                    backgroundColor: categoria.cor,
                    borderRadius: "8px",
                    fontWeight: 500,
                  }}
                >
                  {categoria.nome}
                </span>
              </td>
              <td>
                <button
                  className="btn btn-sm  me-1"
                  onClick={() => EditarCategoria(categoria.id)}
                >
                  <MdEdit size={"20px"}/>
                </button>
                <button
                  className="btn btn-sm "
                  onClick={() => DeletarCategoria(categoria.id)}
                >
                 <RiDeleteBin5Line size={"20px"} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
          </div>
      
    )
}
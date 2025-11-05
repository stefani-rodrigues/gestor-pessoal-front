import { useEffect, useState } from "react";
import CategoriaPageView from "./CategoriaPageView";
import type { CategoriaRequest } from "../../types/login/request/CategoriaRequest";
import CategoriaApiService from "../../services/apiServices/categoria/CategoriaApiService";
import type { CategoriaResponse } from "../../types/login/response/CategoriaResponse";



export default function CategoriaPage(){
    const[categorias,setCategorias] = useState<CategoriaResponse[]>([]);
    const [formData, setFormData] = useState <CategoriaRequest>({
        cor:"#563d7c",
        nome:"",
        id:0
    }
    );

    const categoriaApiService = new CategoriaApiService();
    
    async function ListarCategorias() {
        const data= await categoriaApiService.ListarCategoriaAsync();
        if(data) {
            setCategorias (data);
        }
           
    }

    useEffect(() =>{
        ListarCategorias();
    }, [])

   function EditarForm(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
  const { name, value } = event.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
}
    async function CriarCategoria(event: React.FormEvent<HTMLFormElement>) {
         event.preventDefault();
  await categoriaApiService.CriarNovaCategoriaAsync(formData);
        ListarCategorias();

        setFormData({
          cor:"#563d7c",
           nome:"",
           id:0 
        })
    
    }

    
    async function EditarCategoria(IdCategoria:number) {
        await categoriaApiService.BuscarCategoriaPorIdAsync(IdCategoria);
        
    }
   

    async function DeletarCategoria(idCategoria:number) {
        await categoriaApiService.RemoverCategoriaPorIdAsyn(idCategoria);
        ListarCategorias();
    }
  

    return (
        <CategoriaPageView
        categorias={categorias}
        EditarCategoria={EditarCategoria} 
        CriarCategoria={CriarCategoria}
        DeletarCategoria={DeletarCategoria}
        EditarForm={EditarForm}
        formData= {formData}
    />
    )
    
}
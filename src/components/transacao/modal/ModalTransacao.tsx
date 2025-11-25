import type { TransacaoRequest } from "../../../types/transacoes/requests/TransacoeRequest";
import { TipoTransacaoEnum } from "../../../utis/api/enum/transacao/TipoTransacaoEnum";
import TransacaoApiService from "../../../services/apiServices/transacoes/TransacaoApiService";
import { useEffect, useState } from "react";
import CategoriaApiService from "../../../services/apiServices/categoria/CategoriaApiService";
import type { CategoriaResponse } from "../../../types/categoria/responses/CategoriaResponse";
import ModalTransacaoView from "./ModalTransacaoView";
import {  type Transacao } from "../../../redux/transacao/transacoesSlice";


type Props = {
  mostrar: boolean;
  fechar: () => void;
  OnSalvar: () => void;
  transacaoParaEditar: Transacao | null;
};

export default function ModalTransacao({ fechar, mostrar, OnSalvar, transacaoParaEditar }: Props) {
  const [formData, setFormData] = useState<TransacaoRequest>({
    data: "",
    valor: 0,
    descricao: "",
    tipo: TipoTransacaoEnum.RECEITA,
    categoriaId: 0
  });

  const [categorias, setCategorias] = useState<CategoriaResponse[]>([]);

  const transacaoApiService = new TransacaoApiService();
  const categoriaApiService = new CategoriaApiService();


  function EditarForm(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "categoriaId" ? Number(value) : value
    }));
  }

  async function ListarCategoria() {
    try {
      const resposta = await categoriaApiService.ListarCategoriaAsync();
      setCategorias(resposta);
    } catch (error) {
      console.error("Erro ao listar categorias:", error);
    }
  }

  useEffect(() => {
    if (mostrar && transacaoParaEditar) {
      setFormData({
        descricao: transacaoParaEditar.descricao,
        valor: transacaoParaEditar.valor,
        data: transacaoParaEditar.data.split("T")[0],
        categoriaId: transacaoParaEditar.categoriaId ?? 0,
        tipo:
          transacaoParaEditar.tipo === "RECEITA"
            ? TipoTransacaoEnum.RECEITA
            : TipoTransacaoEnum.DESPESA
      });
    } else if (mostrar && !transacaoParaEditar) {
      setFormData({
        data: "",
        valor: 0,
        descricao: "",
        tipo: TipoTransacaoEnum.RECEITA,
        categoriaId: 0
      });
    }

    ListarCategoria();
  }, [mostrar, transacaoParaEditar]);

 async function SalvarTransacao() {
    try {
      let response;
      if (transacaoParaEditar) {
        
        response = await transacaoApiService.AtualizarTransacaoPorIdAsyn(transacaoParaEditar.id,formData); 
   
      } else {
       
        response= await transacaoApiService.CriarNovaTrasacaoAsync(formData)
  
      }
      
    
      if(response){
        LimparEFechar();
        OnSalvar(); 
 
      } 
    } catch (error) {
      console.error("Deu erro ao salvar (Catch):", error);
     
    }
}

  function LimparEFechar() {
    setFormData({
      data: "",
      valor: 0,
      descricao: "",
      tipo: TipoTransacaoEnum.RECEITA,
      categoriaId: 0
    });

    fechar();
  }

  return (
    <ModalTransacaoView
      modoEdicao={transacaoParaEditar != null}
      EditarForm={EditarForm}
      SalvarTransacao={SalvarTransacao}
      formData={formData}
      fechar={LimparEFechar}
      mostrar={mostrar}
      categorias={categorias}
    />
  );
}

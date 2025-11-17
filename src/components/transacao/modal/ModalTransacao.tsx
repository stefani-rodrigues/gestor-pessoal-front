import type { TransacaoRequest } from "../../../types/login/request/TransacoeRequest";
import { TipoTransacaoEnum } from "../../../utis/api/enum/transacao/TipoTransacaoEnum";
import TransacaoApiService from "../../../services/apiServices/transacoes/TransacaoApiService";
import type { TransacaoResponse } from "../../../types/login/response/TransacaoResponse";
import { useEffect, useState } from "react";
import CategoriaApiService from "../../../services/apiServices/categoria/CategoriaApiService";
import type { CategoriaResponse } from "../../../types/login/response/CategoriaResponse";
import ModalTransacaoView from "./ModalTransacaoView";


type Props = {
  mostrar: boolean;
  fechar: () => void;
  onSalvar: () => void;
};

export default function ModalTransacao({ fechar, mostrar, onSalvar }: Props) {

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
    if (mostrar) {
      ListarCategoria();
    }
  }, [mostrar]);

  async function SalvarTransacao() {
    const response: TransacaoResponse =
      await transacaoApiService.CriarNovaTrasacaoAsync(formData);

    if (response) {
      LimparEFechar();
      onSalvar();
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
      EditarForm={EditarForm}
      SalvarTransacao={SalvarTransacao}
      formData={formData}
      fechar={LimparEFechar}
      mostrar={mostrar}
      categorias={categorias}
    />
  );
}

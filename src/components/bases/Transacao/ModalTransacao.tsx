import type { TransacaoRequest } from "../../../types/login/request/TransacoeRequest";
import { TipoTransacaoEnum } from "../../../utis/api/enum/transacao/TipoTransacaoEnum";
import TransacaoApiService from "../../../services/apiServices/transacoes/TransacaoApiService";
import type { TransacaoResponse } from "../../../types/login/response/TransacaoResponse";
import ModalTransacaoView from "./ModalTransacaoView";
import { useState } from "react";

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
  });
  

  const transacaoApiService = new TransacaoApiService();

  function EditarForm(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function SalvarTransacao() {
    const response: TransacaoResponse = await transacaoApiService.CriarNovaTrasacaoAsync(formData);
    if (response) {
      LimparEFechar(); 
      onSalvar(); 
    }
  }
  async function BuscarTransacao(){
   const dadosAtual: TransacaoRequest = await transacaoApiService.BuscarTrasacoesPorIdAsync(id);
    if(dadosAtual){
      LimparEFechar();
      onSalvar();
    }
  }

  function LimparEFechar(){
    setFormData({
      data: "",
      valor: 0,
      descricao: "",
      tipo: TipoTransacaoEnum.RECEITA,
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
    />
  );
}

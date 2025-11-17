import { CircleFadingPlusIcon } from "lucide-react";
import BotaoComponent from "../../components/bases/botao/BotaoComponet";
import MenuMesComponent from "../../components/menuMesSelect/MenuMesComponent";
import ModalTransacao from "../../components/transacao/modal/ModalTransacao";
import TabelaComponent from "../../components/bases/tabela/TabelaComponent";
import type { TransacaoResponse } from "../../types/login/response/TransacaoResponse";


type Props = {
  mostrar: boolean;
  AbrirEFecharModal: () => void;
  transacoes:TransacaoResponse[];
  onSalvou: () => void
   onAtualizou: () => void
   filtroMes:(data:Date)=>void

};

export default function TransacoePageView({AbrirEFecharModal,mostrar, transacoes,onSalvou,onAtualizou,filtroMes}: Props) {
  return (
    <div >
        <BotaoComponent
            tipo="button"
            titulo="Nova Transação"
            icone={<CircleFadingPlusIcon />}
            variante="add"
            onClick={AbrirEFecharModal}
        />

        <ModalTransacao
            onSalvar={onSalvou}
            fechar={AbrirEFecharModal}
            mostrar={mostrar}
        />
        <MenuMesComponent onChange={filtroMes} />

        <TabelaComponent
        onAtualizar={onAtualizou}
        AbrirEFecharModal={AbrirEFecharModal}
        mostrar={mostrar}
        transacoes={transacoes}/>
    </div>
  );
}

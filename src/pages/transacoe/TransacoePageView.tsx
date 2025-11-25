import { CircleFadingPlusIcon } from "lucide-react";
import BotaoComponent from "../../components/bases/botao/BotaoComponet";
import MenuMesComponent from "../../components/menuMesSelect/MenuMesComponent";
import ModalTransacao from "../../components/transacao/modal/ModalTransacao";
import type { Transacao } from "../../redux/transacao/transacoesSlice";
import TabelaTransacoes from "../../components/transacao/tabelas/TabelaTransacoes";


type Props = {
  mostrar: boolean;
  transacoes:Transacao[];
  itemEmEdicao: Transacao | null;
  OnSalvou: () => void
  OnAtualizou: () => void
  filtroMes:(data:Date)=>void
  AbrirParaNovo: () => void;      
  OnClickEditar: (idTransacao: number) => void;
  OnClickDeletar:(idTransacao:number) =>  void;
  FecharModal: () => void;

};

export default function TransacoePageView({
  mostrar, 
  transacoes,
  AbrirParaNovo,
  FecharModal,
  filtroMes,
  OnSalvou,
  OnClickDeletar,
  OnClickEditar,
  itemEmEdicao
}: Props) {
  return (
    <div >
        <BotaoComponent
            tipo="button"
            titulo="Nova Transação"
            icone={<CircleFadingPlusIcon />}
            variante="add"
            onClick={AbrirParaNovo}
        />

        <ModalTransacao
            OnSalvar={OnSalvou}
            fechar={FecharModal}
            mostrar={mostrar}
            transacaoParaEditar={itemEmEdicao}
        />
        <MenuMesComponent onChange={filtroMes} />

        <TabelaTransacoes
          transacoes={transacoes}
          OnClickDeletar={OnClickDeletar}
          OnClickEditar={OnClickEditar}
        />
    </div>
  );
}

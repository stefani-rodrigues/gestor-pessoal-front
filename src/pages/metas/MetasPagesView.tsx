import { CircleFadingPlusIcon } from "lucide-react";
import BotaoComponent from "../../components/bases/botao/BotaoComponet";
import MetaComponentModal from "../../components/metas/modal/MetaComponentModal";
import MetaComponentCard from "../../components/metas/card/MetaComponentCard";

type Props = {
  mostrar: boolean;
  AbrirEFecharModal: () => void;
  //onSalvou: () => void
};

export default function MetasPageView ({AbrirEFecharModal,mostrar}:Props){

    return(
        <div className=" d-flex flex-column gap-3">

          <div className="d-flex justify-content mb-3">
            <BotaoComponent
                    icone={<CircleFadingPlusIcon />}
                    titulo="Nova Meta"
                    variante="add"
                    onClick={AbrirEFecharModal}
                  />
          </div>
            <MetaComponentModal
              fechar={AbrirEFecharModal}
              mostrar={mostrar}
            />
            <MetaComponentCard/>
            
        </div>
    );
}
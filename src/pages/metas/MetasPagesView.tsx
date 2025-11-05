import { CircleFadingPlusIcon } from "lucide-react";
import BotaoComponent from "../../components/bases/botao/BotaoComponet";

export default function MetasPageView (){
    return(
        <div>
            <BotaoComponent icone ={<CircleFadingPlusIcon/>} titulo="Nova Meta"  variante="add" />
        </div>
    );
}
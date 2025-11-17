
import MetaComponentModalView from "./MetaComponentModalView";

type Props = {
  mostrar: boolean;
  fechar: () => void;
   onSalvar: () => void;
};

export default function MetaComponentModal ({fechar,mostrar,onSalvar}:Props){

   
    return <MetaComponentModalView
                SalvarMetas={onSalvar}
                fechar={fechar}
                mostrar={mostrar}
            />
        
}
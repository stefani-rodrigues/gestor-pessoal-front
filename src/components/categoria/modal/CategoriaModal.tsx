
import CategoriaModalView from "./CategoriaModalView";

type Props = {
  mostrar: boolean;
  fechar: () => void;
  onSalvar: () => void;
};
export default function CategoriaModal ({fechar,mostrar,onSalvar}:Props){

  

   

    return (
        <CategoriaModalView
        fechar={fechar}
        mostrar={mostrar}
        onSalvou={onSalvar}
        />
    )
}
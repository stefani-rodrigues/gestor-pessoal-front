
import CardComValorComponetView from "./CardComValorComponentView";
import toast from "react-hot-toast";

type props ={
  nome:string;
  valor:number;
}

export default function CardComValorComponet ({nome,valor}:props){


  function atualizarValor () {
   toast.error("Falta implementar")
  }

  return <CardComValorComponetView 
          nome={nome}
          valor={valor}
  />
}
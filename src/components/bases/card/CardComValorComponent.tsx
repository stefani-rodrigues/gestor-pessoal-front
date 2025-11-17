
import CardComValorComponetView from "./CardComValorComponentView";

type props ={
  nome:string;
  valor:number;
}

export default function CardComValorComponet ({nome,valor}:props){



  return <CardComValorComponetView 
          nome={nome}
          valor={valor}
  />
}
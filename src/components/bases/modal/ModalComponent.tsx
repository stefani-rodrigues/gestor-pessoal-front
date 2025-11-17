import type { ReactNode } from "react";
import ModalComponentView from "./ModalComponentView";

type props ={
    mostrar:boolean;
    titulo:string;
    fechar:()=> void;
    salvar?:() => void;
    children?: ReactNode;
   
}

export default function ModalComponent({children,fechar,mostrar,titulo,salvar}:props) {
  
  return (
    <ModalComponentView 
      fechar={fechar}
      children={children}
      mostrar={mostrar}
      titulo={titulo}
      salvar={salvar}
    />
  );
}

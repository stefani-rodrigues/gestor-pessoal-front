import type { ReactNode } from "react";
import BotaoComponentView from "./BotaoComponetView";

type props ={
    titulo?:string;
    onClick?: () => void;
    tipo?: "button" | "submit" | "reset";
     variante?: "add" | "salvar" | "cancelar" | "editar" | "excluir"; 
     icone?: ReactNode ;
}

export default function BotaoComponent ({titulo,icone,onClick,tipo="button",variante ="add"}:props){
    return <BotaoComponentView 
    titulo={titulo}
    icone={icone}
    onClick={onClick} 
    tipo={tipo}
    variante={variante}/>
}
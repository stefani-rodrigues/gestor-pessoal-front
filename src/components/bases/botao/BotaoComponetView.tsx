import type { ReactNode } from "react";
import styles  from "./BotaoComponet.module.css"

type props ={
    titulo?:string;
     onClick?: () => void;
    tipo?: "button" | "submit" | "reset";
     variante?: "add" | "salvar" | "cancelar" | "editar" | "excluir"; 
     icone?: ReactNode;
}

export default function BotaoComponentView ({titulo,
    onClick,
    tipo="button",
    variante="add",
    icone,
}:props){

  const classeCustomizada =
    variante === "add"? styles["buton-add"]
      : variante === "salvar"
      ? styles["buton-salvar"] 
      : styles["buton-cancelar"]
      ;

return (
 <button 
    type={tipo} 
    className={`btn d-flex align-items-center gap-2 ${classeCustomizada}`}
    onClick={onClick}
    >
    <span>{titulo}</span>
    {icone && <span>{icone}</span>} 
    </button>
  );
}
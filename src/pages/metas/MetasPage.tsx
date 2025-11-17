import { useState } from "react";
import MetasPageView from "./MetasPagesView";

export default function MetasPage (){
    const [mostrar, setMostrar] = useState(false);

    function AbrirEFecharModal() {
    setMostrar((prev) => !prev);
  }
    return (
   <MetasPageView
   AbrirEFecharModal={AbrirEFecharModal}
   mostrar={mostrar}
   />
    
    )
}
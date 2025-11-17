import { useState } from "react";
import MenuMesComponentView from "./MenuMesComponentView";


type Props = {
  onChange: (novaData: Date) => void;
};

export default function MenuMesComponent({ onChange }: Props) {
  const [dataAtual, setDataAtual] = useState(new Date());

  const nomeMes = dataAtual.toLocaleString("pt-BR", { month: "long" });
  const mes = nomeMes.charAt(0).toUpperCase() + nomeMes.slice(1);

  
  function handleChangeMes(value: number) {
    const novaData = new Date(dataAtual);
    novaData.setMonth(dataAtual.getMonth() + value);
    setDataAtual(novaData);
    onChange(novaData); 
  }
     
    return <MenuMesComponentView
            mes={mes}
            handleChangeMes={handleChangeMes}
            />
}
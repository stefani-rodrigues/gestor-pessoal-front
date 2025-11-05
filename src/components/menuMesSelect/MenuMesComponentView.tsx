import { Button } from "react-bootstrap"
import styles from "./MenuMesComponent.module.css"

type props = {
  mes:string;
  handleChangeMes:(value: number) => void
  
}

export default function MenuMesComponentView ({handleChangeMes,mes}:props){

  
  return (
    <div className={`${styles["menu-mes-container"]}`}>
      <Button className={`${styles["mes-arrow-btn"]}`} onClick={() => handleChangeMes(-1)}>
        &lt;
      </Button>
      <h1 className={`${styles["mes-nome"]}`} >{mes}</h1>
      <Button className={`${styles["mes-arrow-btn"]}`} onClick={() =>  handleChangeMes(1)}>
        &gt;
      </Button>
    </div>
  )
}
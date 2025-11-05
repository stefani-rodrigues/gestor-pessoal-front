import type { ReactNode } from "react";
import BotaoComponent from "../botao/BotaoComponet";
import { Modal } from "react-bootstrap";

type props ={
    mostrar:boolean;
    titulo:string;
    fechar:()=> void;
    salvar?:() => void;
    children: ReactNode;
   
}

export default function ModalComponentView ({fechar
    ,mostrar,
    titulo,
    salvar,
    children
    }:props){
    return (
       <Modal show={mostrar} onHide={fechar} centered>
      <Modal.Header closeButton>
        <Modal.Title>{titulo}</Modal.Title>
      </Modal.Header>

      <Modal.Body>{children}</Modal.Body>

      <Modal.Footer>
      <BotaoComponent titulo="Cancelar" variante="cancelar" onClick={fechar}/>
        {salvar && (
        <BotaoComponent titulo="Salvar"  variante="salvar" onClick={salvar}/>
        )}
      </Modal.Footer>
    </Modal>
  );

}
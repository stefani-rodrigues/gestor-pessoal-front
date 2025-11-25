import { useState } from "react";
import AlterarSenhaUsuarioModalView from "./alterarSenhaUsuarioModalView";
import LoginApiService from "../../../services/apiServices/login/loginApiService";


type Props = {
    email: string;
    token:string;
    mostrar: boolean;
    fechar: () => void;
};

export default function AlterarSenhaUsuarioModal({
    email,
    mostrar,
    token,
    fechar
}: Props) {
    const [novaSenha, setNovaSenha] = useState<string>("");
    const apiAuth = new LoginApiService();

    function onChangeNovaSenha(e: React.ChangeEvent<HTMLInputElement>) {
        setNovaSenha(e.target.value);
    }


    function limparEFecharModal(){
        setNovaSenha("");
        fechar();
    }

    async function onSalvar() {
       await apiAuth.Registrarnovasenha(email,novaSenha,token);
       limparEFecharModal(); 
    }

  return (
    <AlterarSenhaUsuarioModalView 
        mostrar={mostrar}
        fechar={limparEFecharModal}
        novaSenha={novaSenha}
        onChangeNovaSenha={onChangeNovaSenha}
        onSalvar={onSalvar}
    />
  );
}

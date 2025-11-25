import { Route, Routes } from "react-router-dom";
import HomePages from "./pages/home/HomePages";
import LoginPages from "./pages/login/LoginPages";
import CadastrasePages from "./pages/login/cadastro/CadastrasePages";
import TransacoePage from "./pages/transacoe/TransacoePage";
import MetasPage from "./pages/metas/MetasPage";
import LayoutLogin from "./components/layoutLogin/LayoutLoginComponent";
import LayoutAdmim from "./components/layoutAdmim";
import CategoriaPage from "./pages/categoria/CategoriaPage";
import PrivateRoute from "./routes/private/privateRoute";
import UsuarioPages from "./pages/perfil/UsuarioPages";
import EsqueciMinhaSenhaPage from "./pages/login/esqueciMinhaSenha/EsqueciMInhaSenhaPage";
import RedefinirSenhaPage from "./pages/login/redefinirSenha/RedefinirSenhaPage";





function AppRoutes() {
  return (
    <Routes>
      <Route path="/auth" element={<LayoutLogin/>}>
        <Route path="login" element={<LoginPages />} />
        <Route path="cadastro" element={<CadastrasePages />} />
        <Route path="esqueciminhasenha" element={<EsqueciMinhaSenhaPage/>}/>
        <Route path="redefinirsenha" element={<RedefinirSenhaPage />} />
      </Route>

        <Route element={<PrivateRoute/>}>
            <Route element={<LayoutAdmim />}>
            <Route path="/" element={<HomePages />} />
            <Route path="transacoes" element={<TransacoePage />} />
            <Route path="metas" element={<MetasPage/>} />
            <Route path="usuario" element={ <UsuarioPages/>} />
            <Route path="categoria" element={<CategoriaPage/>} />
      </Route>
        </Route>
   
       
        

    </Routes>
  );
}

export default AppRoutes;

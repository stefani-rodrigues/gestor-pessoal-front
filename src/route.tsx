import { Route, Routes } from "react-router-dom";
import HomePages from "./pages/home/HomePages";
import LoginPages from "./pages/login/LoginPages";
import CadastrasePages from "./pages/login/cadastro/CadastrasePages";
import TransacoePage from "./pages/transacoe/TransacoePage";
import MetasPage from "./pages/metas/MetasPage";
import LayoutLogin from "./components/layoutLogin/LayoutLoginComponent";
import LayoutAdmim from "./components/layoutAdmim";
import UsuarioPages from "./pages/perfil/UsuarioPages";
import CategoriaPage from "./pages/categoria/CategoriaPage";




function AppRoutes() {
  return (
    <Routes>
      <Route path="/auth" element={<LayoutLogin/>}>
        <Route path="login" element={<LoginPages />} />
        <Route path="cadastro" element={<CadastrasePages />} />
      </Route>

      <Route element={<LayoutAdmim />}>
        <Route path="/" element={<HomePages />} />
        <Route path="transacoes" element={<TransacoePage />} />
        <Route path="metas" element={<MetasPage/>} />
        <Route path="perfil" element={<UsuarioPages />} />
        <Route path="categoria" element={<CategoriaPage/>} />
      </Route>
        

    </Routes>
  );
}

export default AppRoutes;

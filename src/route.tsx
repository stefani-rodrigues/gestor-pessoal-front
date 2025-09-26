import { Route, Routes } from "react-router-dom";
import LayoutAdmim from "./components/LayoutAdmim";
import HomePages from "./pages/home/HomePages";
import UsuarioPages from "./pages/perfil/UsuarioPages";
import LoginPages from "./pages/login/LoginPages";

import LayoutLogin from "./components/LayoutLogin/LayoutLoginComponent";
import CadastrasePages from "./pages/login/cadastro/CadastrasePages";
import ConfiPages from "./pages/configuracao/ConfigPages";
import InvestimentoPage from "./pages/investimento/InvestimentoPage";
import TransacoePage from "./pages/transacoe/TransacoePage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/auth" element={<LayoutLogin />}>
        <Route path="login" element={<LoginPages />} />
        <Route path="cadastro" element={<CadastrasePages />} />
      </Route>

      <Route element={<LayoutAdmim />}>
        <Route path="/" element={<HomePages />} />
        <Route path="transacoes" element={<TransacoePage />} />
        <Route path="investimento" element={<InvestimentoPage/>} />
         <Route path="perfil" element={<UsuarioPages />} />
         <Route path="configuracao" element={<ConfiPages />} />

      </Route>
    </Routes>
  );
}

export default AppRoutes;

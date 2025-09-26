
import { Home, User, Settings, BarChart3, FileText } from "lucide-react";
import SidebarComponentView from "./SideBarComponentView";
import type { NavigationItem } from "../../types/login/sidebar/SideBarTypes";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



const navigationItems = (): NavigationItem[] => [
  { id: "dashboard", name: "Visão geral", icon: Home, href: "/" },
  { id: "transacoes", name: "Transações", icon: FileText, href: "/transacoes" },
  { id: "investimento", name: "Investimento", icon: BarChart3, href: "/investimento" },
  { id: "perfil", name: "Perfil", icon: User, href: "/perfil" },
  { id: "configuracao", name: "Configuração", icon: Settings, href: "/configuracao" },
  
];

export function Sidebar() {
  const [activeItem, setActiveItem] = useState("dashboard");
  const navigate = useNavigate();

  function handleItemClick (itemId: string) {
    const link = navigationItems().find(p => p.id == itemId);
    if(!link) return;
    setActiveItem(itemId); 
    navigate(link.href)   ;
  };

  return (
     <SidebarComponentView
      handleItemClick={handleItemClick}
      navigationItems={navigationItems()}
      activeItem={activeItem}
     />
  )
}

import { Home, FileText, SettingsIcon, TagIcon } from "lucide-react";
import type { NavigationItem } from "../../types/login/sidebar/SideBarTypes";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SidebarComponentView from "./SideBarComponentView";


const nav_items: NavigationItem[] = [
  { id: "home", name: "Visão geral", icon: Home, href: "/" },
  { id: "transacoes", name: "Transações", icon: FileText, href: "/transacoes" },
 // { id: "metas", name: "Metas", icon: TargetIcon, href: "/metas" },
  {
    id:"configuracao",name:"Configuração",icon:SettingsIcon,children:[
      {id:"categoria",name:"Categoria",icon:TagIcon,href:"/categoria"},
    ]
  }
];

export function Sidebar() {
  const [activeItem, setActiveItem] = useState("home");
  const navigate = useNavigate();

  function handleItemClick(itemId: string) {
    
    function encontrarItem(list: NavigationItem[], id: string): NavigationItem | undefined {
      for (const it of list) {
        if (it.id === id) return it;
        if (it.children) {
          const found = encontrarItem(it.children, id);
          if (found) return found;
        }
      }
      return undefined;
    }

    const link = encontrarItem(nav_items, itemId);
    if (!link) return;

    setActiveItem(itemId);

    if (typeof link.href === "string" && link.href.trim().length > 0) {
      navigate(link.href);
    }
  
  }

  return (
    <SidebarComponentView
      handleItemClick={handleItemClick}
      nav_items={nav_items}
      activeItem={activeItem}
    />
  );
}

import { LogOut } from "lucide-react";
import type { NavigationItem } from "../../types/login/sidebar/SideBarTypes";

type props ={ 
  handleItemClick(id: string): void
  activeItem: string;
  navigationItems: NavigationItem[]
}
 export default function SidebarComponentView({handleItemClick,navigationItems,activeItem}:props) {
  

  return (
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white border-r border-slate-200 z-40 flex flex-col`}
      >
  
        <div className="flex items-center p-5 border-b border-slate-200 bg-slate-50/60">
          <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center shadow-sm">
          </div>
          <div className="flex flex-col ml-2.5">
            <span className="font-semibold text-slate-800 text-base">Meu Gestor</span>
          </div>
        </div>
        <nav className="flex-1 px-3 py-2 overflow-y-auto">
          <ul className="space-y-0.5">
            {
              navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeItem === item.id;

                return (
                  <li key={item.id}>
                    <button
                      onClick={() => handleItemClick(item.id)}
                      className={`
                        w-full flex items-center space-x-2.5 px-3 py-2.5 rounded-md text-left transition-all duration-200 group
                        ${isActive
                          ? "bg-blue-50 text-blue-700"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                        }
                      `}
                    >
                      <div className="flex items-center justify-center min-w-[24px]">
                        <Icon
                          className={`h-4.5 w-4.5 flex-shrink-0 ${isActive ? "text-blue-600" : "text-slate-500 group-hover:text-slate-700"}`}
                        />
                      </div>
                      <span className={`text-sm ${isActive ? "font-medium" : "font-normal"}`}>
                        {item.name}
                      </span>
                    </button>
                  </li>
                );
              })
            }
          </ul>
        </nav>

    
          <button
            onClick={() => handleItemClick("login")}
            className="w-full flex items-center justify-center space-x-2.5 px-3 py-2.5 rounded-md text-left text-red-600 hover:bg-red-50 hover:text-red-700 transition-all duration-200"
          >
            <LogOut className="h-4.5 w-4.5 flex-shrink-0 text-red-500 group-hover:text-red-600" />
            <span className="text-sm">Sair</span>
          </button>
        </div>
     
  );
}


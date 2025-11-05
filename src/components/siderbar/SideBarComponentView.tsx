import { useState } from "react";
import styles from "./SideBarComponent.module.css";
import Logo from "../../assets/logo/logo.svg";
import type { NavigationItem } from "../../types/login/sidebar/SideBarTypes";

type props = {
  handleItemClick(id: string): void;
  activeItem: string;
  nav_items: NavigationItem[];
};

export default function SidebarComponentView({
  handleItemClick,
  nav_items,
  activeItem,
}: props) {
  const [openMenu, setOpenMenu] = useState<string | null>(null); 
  const toggleMenu = (id: string) => {
    setOpenMenu((prev) => (prev === id ? null : id));
  };

  return (
    <div
      style={{ width: "250px", minHeight: "100vh" }}
      className="border-end bg-light d-flex flex-column"
    >
      <div className="d-flex align-items-center p-4 border-bottom">
        <img src={Logo} alt="Logo" className={styles.logoImg} />
      </div>

      <nav className="flex-grow-1 p-2 gap-px overflow-y-auto">
        <ul className="nav nav-pills flex-column">
          {nav_items.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;
            const isOpen = openMenu === item.id;

            return (
              <li className="nav-item" key={item.id}>
                <button
                  onClick={() =>
                    item.children ? toggleMenu(item.id) : handleItemClick(item.id)
                  }
                  className={`nav-link w-100 d-flex align-items-center justify-content-between text-start ${
                    isActive ? styles.linkAtivo : styles.linkInativo
                  }`}
                >
                  <div className="d-flex align-items-center gap-2">
                    {Icon && <Icon />}
                    <span>{item.name}</span>
                  </div>
                  {item.children && (
                    <span className="ms-auto">
                      {isOpen ? "" : ""}
                    </span>
                  )}
                </button>

                {item.children && isOpen && (
                  <ul className="nav flex-column ms-4 mt-1">
                    {item.children.map((subItem) => {
                      const SubIcon = subItem.icon;
                      const isSubActive = activeItem === subItem.id;
                      return (
                        <li className="nav-item" key={subItem.id}>
                          <button
                            onClick={() => handleItemClick(subItem.id)}
                            className={`nav-link w-100 d-flex align-items-center gap-2 text-start ${
                              isSubActive
                                ? styles.linkAtivo
                                : styles.linkInativo
                            }`}
                          >
                            {SubIcon && <SubIcon />}
                            <span>{subItem.name}</span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

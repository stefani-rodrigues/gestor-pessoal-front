import { Outlet } from "react-router-dom";
import { Sidebar } from "../siderbar/SideBarComponent";
import Header from "../header/HeaderComponetView";

  export default function LayoutAdmin() {
  return (
    <div className="d-flex vh-100">
      <Sidebar />
      <div className="d-flex flex-column flex-grow-1">
        <Header />
        <div className="flex-grow-1 p-4 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

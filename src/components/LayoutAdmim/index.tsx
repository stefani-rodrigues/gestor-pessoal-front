import { Outlet } from "react-router-dom"

import { Sidebar } from "../siderbar/SideBarComponent";

function LayoutAdmim() {
  return (
 <>
  <div className="d-flex flex-column min-vh-100">
   
    <div className="d-flex flex-grow-1">
  
      <div className="h-full w-72 bg-white border-r border-slate-200 flex-shrink-0 flex flex-col">
        <Sidebar />
      </div>
      <div className="flex-grow-1 p-3">
        <Outlet />
      </div>
    </div>
  </div>
</>


  );
}

export default LayoutAdmim;

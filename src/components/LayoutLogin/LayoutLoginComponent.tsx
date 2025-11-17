import { Outlet } from "react-router-dom";
import styles from "./LayoutLoginComponent.module.css"

function LayoutLogin() {
  
  return (
    <div className={`${styles.layout}`}>
        <Outlet />
    </div>
   
  );
}

export default LayoutLogin;

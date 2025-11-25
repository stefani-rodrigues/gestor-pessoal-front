import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRoute (){
    
    const {isAutenticado} = useSelector((state:RootState) =>state.auth);

    return isAutenticado
            ? <Outlet/>
            : <Navigate to="/auth/login" replace />;
    
}
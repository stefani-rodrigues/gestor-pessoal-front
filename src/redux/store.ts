import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice"
import transacoesReducer from "./transacao/transacoesSlice";
import usuarioReducer from "./perfil/perfilSlice";




export const store = configureStore({
    reducer: {
        auth : authReducer ,
        transacoes : transacoesReducer,
        usuario : usuarioReducer,
    
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
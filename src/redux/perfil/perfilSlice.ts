import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface Usuario {
    id: number;
    nome: string;
    email: string;
}

interface UsuarioState {
    dados: Usuario | null;
}

const initialState: UsuarioState = {
    dados: null,
};

const perfilSlice = createSlice({
    name: "usuario",
    initialState,
    reducers: {
        setUsuario: (state, action: PayloadAction<Usuario>) => {
            state.dados = action.payload;
        },
        atualizarNome: (state, action: PayloadAction<string>) => {
            if (state.dados) {
                state.dados.nome = action.payload;
            }
        },
        limparUsuario: (state) => {
            state.dados = null;
        }
    },
});

export const { setUsuario, atualizarNome, limparUsuario } = perfilSlice.actions;
export default perfilSlice.reducer;

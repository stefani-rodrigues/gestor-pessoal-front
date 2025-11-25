import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { TipoTransacaoEnum } from "../../utis/api/enum/transacao/TipoTransacaoEnum";

 export interface Transacao  {
    id:number,
    valor:number,
    tipo:TipoTransacaoEnum,
    data:string,
    descricao:string,
    categoriaId?:number | null,
    categoriaNome?: string | null;
    cor?:string | null;
}

interface TransacoesState{
     transacoes:Transacao[];
}

const initialState: TransacoesState = {
     transacoes:[]
}

const transacoesSlice = createSlice({
    name:'transacoes',
    initialState,
    reducers:{
        adicionar:(state,action:PayloadAction<Transacao>) => {
            state.transacoes.push(action.payload);
         },
        setTransacoes:(state, action: PayloadAction<Transacao[]>) => {
        state.transacoes = action.payload;
        },
        remover: (state, action: PayloadAction<number>) => {
        state.transacoes = state.transacoes.filter(item => item.id !== action.payload);
        },
        atualizar: (state, action: PayloadAction<Transacao>) => {
        const index = state.transacoes.findIndex(t => t.id === action.payload.id);
        if (index !== -1) {
            state.transacoes[index] = action.payload;
        }
    }
}
});

export const { adicionar,setTransacoes,remover,atualizar } = transacoesSlice.actions;
export default transacoesSlice.reducer;
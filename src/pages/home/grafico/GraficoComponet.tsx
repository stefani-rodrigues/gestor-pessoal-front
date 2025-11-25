import type { TransacaoResponse } from "../../../types/transacoes/responses/TransacaoResponse";
import GraficoComponentView from "./GraficoComponetView";

type CategoriaItem = {
    categoria: string;
    total: number;
};

export default function GraficoComponent({ dados }: { dados: TransacaoResponse[] }) {


    function agruparCategorias(dados: TransacaoResponse[]) {
        const mapa = new Map<string, number>();

        dados.forEach(item => {
            const categoria = item.categoriaNome ?? "Sem Categoria";
            const atual = mapa.get(categoria) ?? 0;
            mapa.set(categoria, atual + item.valor);
        });

        return Array.from(mapa, ([categoria, total]) => ({ categoria, total }));
    }

    function calcularPorcentagens(itens: CategoriaItem[]) {
        const totalGeral = itens.reduce((soma, item) => soma + item.total, 0);

        return itens.map(item => ({
            categoria: item.categoria,
            porcentagem: totalGeral === 0 ? 0 : (item.total / totalGeral) * 100
        }));
    }

   
    function gerarCor(categoria: string) {
        let hash = 0;
        for (let i = 0; i < categoria.length; i++) {
            hash = categoria.charCodeAt(i) + ((hash << 5) - hash);
        }
        const hue = Math.abs(hash) % 360;
        return `hsl(${hue}, 65%, 50%)`;
    }

    const agrupado = agruparCategorias(dados);
    const porcentagens = calcularPorcentagens(agrupado);

    return (
        <GraficoComponentView
            titulo="Despesas por Categoria"
            porcentagens={porcentagens}
            gerarCor={gerarCor}
        />
    );
}

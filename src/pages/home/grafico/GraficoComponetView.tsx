type Item = {
    categoria: string;
    porcentagem: number;
};

type Props = {
    titulo: string;
    porcentagens: Item[];
    gerarCor: (categoria: string) => string;
};

export default function GraficoComponentView({ titulo, porcentagens, gerarCor }: Props) {
    return (
        <div className="container mt-4">
            <h4 className="mb-4">{titulo}</h4>

            {porcentagens.map((item, index) => {
                const cor = gerarCor(item.categoria);

                return (
                    <div key={index} className="my-3">
                        <p className="mb-1">
                            {item.categoria} — {item.porcentagem.toFixed(1)}%
                        </p>

                        <div className="progress" style={{ height: "25px" }}>
                            <div
                                className="progress-bar"
                                style={{
                                    width: `${item.porcentagem}%`,
                                    backgroundColor: cor,
                                    transition: "width 1.2s ease"
                                }}
                            >
                                {item.porcentagem.toFixed(1)}%
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

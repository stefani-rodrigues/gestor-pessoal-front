import styles from './MetaComponetCard.module.css'

type Props ={

    titulo:string;
    descricao:string;
    valorInicial:string;
    valorMeta:string;
}

export default function MetaComponentCardView ({descricao,titulo,valorInicial,valorMeta}:Props){


return (
 <div className={`card border-0 shadow-sm  ${styles.cardCustom}`}>
    
      <h5 className={` ${styles.cardHeader}`}>{titulo}</h5>
  <div className="card-body">
    <p className="mb-1 text-muted d-flex justify-content-between">
        <span>Valor inicial: <strong>R${valorInicial}</strong></span>
        <span>Meta: <strong>R${valorMeta}</strong></span>
    </p>
     <p className="text-secondary mb-0">{descricao}</p>
  </div>
</div>

)
}
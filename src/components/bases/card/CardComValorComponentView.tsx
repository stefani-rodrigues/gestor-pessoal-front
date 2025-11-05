
type props ={
  nome:string;
  valor:number;
}

export default function CardComValorComponetView ({nome,valor}:props){
 return(
   <div className="card "style={{ width: "15rem", height:"5rem" }} >
  <div className="card-body">
        <h6 className="card-subtitle mb-1 text-muted">{nome}</h6>
    <p className="card-number ">R${valor}</p>
  </div>
</div>
 );
}
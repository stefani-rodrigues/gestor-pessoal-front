export default function UsuarioPagesView (){
    return (
        <div className="">
            <div className="d-flex justify-content-center mb-4">
                <img 
                    src="https://via.placeholder.com/150" // Substitua pela variável ou URL da imagem
                    alt="Foto do Usuário"
                    className="rounded-circle bg-black"
                    width="150"
                    height="150"
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <form className="row  m-2 g-2 align-content-center justify-content-center" >
                
                <div className="col-md-5"> 
                    <label htmlFor="nome" className="form-label ">Nome Completo</label>
                    <input type="text" className="form-control" id="nome"/>
                </div>
                <div className="col-md-5"> 
                    <label htmlFor="telefone" className="form-label">Telefone</label>
                    <input type="text" className="form-control" id="telefone"/>
                </div>

           
                <div className="col-md-5"> 
                    <label htmlFor="data" className="form-label">Data de nascimento</label>
                    <input type="date" className="form-control" id="data" />
                </div>
                <div className="col-md-5"> 
                    <label htmlFor="inputState" className="form-label">Gênero</label>
                    <select id="inputState" className="form-select">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
                
             
                <div className="col-md-5"> 
                    <label htmlFor="inputAddress2" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" />
                </div>
                <div className="col-md-5"> 
                    <label htmlFor="inputCity" className="form-label">Senha</label>
                    <input type="text" className="form-control" id="inputCity"/>
                </div>
                
               
                <div className="col-12 mt-4 d-flex justify-content-end"> 
                  
                </div>
            </form>
        </div>
    )
}
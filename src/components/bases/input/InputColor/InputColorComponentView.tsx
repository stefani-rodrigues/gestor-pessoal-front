

type props ={
     onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
      value: string;
      
}

export default function InputColorComponentView({onChange, value}:props){

    return (
    <div>
        <label htmlFor="inputClor" className="form-label">Cor destaque</label>
        <input type="color" className="form-control form-control-color" name="cor" id="inputClor"  value={value}  onChange={onChange}></input>
    </div>
    )
}
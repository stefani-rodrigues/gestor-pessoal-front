import InputColorComponentView from "./InputColorComponentView";

type props ={
     onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value:string;
}

export default function inputColorComponent({onChange,value}:props){
    return <InputColorComponentView
            onChange={onChange}
            value={value}
    />
}
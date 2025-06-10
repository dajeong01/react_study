import { useState } from "react";

function InputState2(){

    const [ inputValue, setInputValue ] = useState({
        t1: "",
        t2: "",        
        t3: "",
    });

    const a = 10;
    const b = a;

    const handleOnChange = (e) => {
        console.log(e);
    }

    const handleOnChange2 = (e) => {
        console.log(e);
    }

    return <div>
        <input type="text" value={inputValue.t1} onChange={handleOnChange}/>
        <input type="text" value={inputValue.t2} onChange={handleOnChange}/>
        <input type="text" value={inputValue.t3} onChange={handleOnChange}/>

        <input type="text" value={inputValue.t4} onChange={handleOnChange2}/>
        <input type="text" value={inputValue.t5} onChange={handleOnChange2}/>
        <input type="text" value={inputValue.t6} onChange={handleOnChange2}/>
    </div>
}

export default InputState2;
import { useState } from "react";

function InputState2() {

    const [inputValue, setInputValue] = useState({
        t1: "",
        t2: "",
        t3: "",
    });

    const a = 10;
    const b = a;

    const handleOnChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(`name: ${name}, value: ${value}`);

        const newInputValue = {
            ...inputValue,  // 기존의 inputValue를 복사
            [name]: value,  // 동적으로 name에 해당하는 값을 업데이트
        };

        setInputValue(newInputValue);  // 상태 업데이트

        const addr = "address";
        const address = "부산 사하구";

        const obj = {
            name: "제다정",
            age: 25,
            ["address"]: address,       // 키값은 []로 감싸면 동적으로 설정 가능
            address: "부산 진구",        // 키값은 유일하니깐 뒤에 들어오는게 앞에꺼 덮어버릴거임
        }

        // const obj2 = obj;        // 얕은 복사
        const obj2 = {              // 깊은 복사
            ...obj,                // 스프레드 문법을 사용하여 얕은 복사
            address: "부산 동구",   // 기존의 address 값을 덮어씀
        }
    }

    return <div>
        <input type="text" name="t1" value={inputValue.t1} onChange={handleOnChange} />
        <input type="text" name="t2" value={inputValue.t2} onChange={handleOnChange} />
        <input type="text" name="t3" value={inputValue.t3} onChange={handleOnChange} />

        <input type="text" value={inputValue.t1} onChange={(e) => { console.log(e) }} />
        <input type="text" value={inputValue.t2} onChange={(e) => { console.log(e) }} />
        <input type="text" value={inputValue.t3} onChange={(e) => { console.log(e) }} />
    </div>
}

export default InputState2;
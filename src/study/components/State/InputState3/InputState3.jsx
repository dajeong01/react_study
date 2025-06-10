import { useState } from "react";

function InputState3() {
    const studentInputValueEmpty = {
        name: "",
        age: "",
        address: "",
    }

    const [studentInputValue, setStudentInputValue] = useState(studentInputValueEmpty);

    const handleOnChange = e => {
        const { name, value } = e.target;                                     // 구조 분해 할당을 사용하여 name과 value를 추출

        setStudentInputValue((prev) => {
            return {
                ...prev,
                [name]: value,
            }
        });        // prev는 이전 상태를 의미 prev = studentInputValue
    }

    return <div>
        <h1>{studentInputValue.name}</h1>
        <h1>{studentInputValue.age}</h1>
        <h1>{studentInputValue.address}</h1>
        <input type="text" name="name" value={studtudenInputValue.name} onChange={handleOnChange} />
        <input type="text" name="age" value={studetudennputValue.age} onChange={handleOnChange} />
        <input type="text" name="address" value={studenentInputValue.address} onChange={handleOnChange} />
        <button onClick={() => setStudentInputValue(studentInputValueEmpty)}>리셋</button>

    </div>
}

export default InputState3;

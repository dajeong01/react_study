import { useState } from "react";

function InputStatePractice() {
    const [inputValues, setInputValues] = useState(["", "", ""]);
    const [h1Texts, setH1Texts] = useState(["", "", ""]);

    console.log("렌더링");

    const handleOnChange = (index, e) => {
        const newValues = [...inputValues]; // 복사
        newValues[index] = e.target.value;  // 인덱스별로 값 변경
        setInputValues(newValues);
    };

    const handleOnClick = () => {
        setH1Texts([...inputValues]); // 현재 입력된 값들을 복사해서 표시용 상태에 저장
    };

    return (
        <div>
            {h1Texts.map((text, i) => (
                <h1 key={i}>{text}</h1>
            ))}

            {inputValues.map((value, i) => (
                <input
                    key={i}
                    className="input"
                    type="text"
                    value={value}
                    onChange={(e) => handleOnChange(i, e)}
                />
            ))}

            <button onClick={handleOnClick}>확인</button>
        </div>
    );
}

export default InputStatePractice;

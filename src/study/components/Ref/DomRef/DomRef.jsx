import React, { useEffect, useRef, useState } from 'react';
import a, { fx2, fx3 } from '../ImportStudy/functions';  // default는 중괄호로 안 감싼다.
// import fx1, { fx2 } from '../ImportStudy/functions'; // 같은 의미 윗줄이랑
// import * as f from '../ImportStudy/functions'; // 이건 전부 다 들고올때

function DomRef(props) {
    a();    // default는 하나밖에 안되니깐 함수 이름을 바꿀수있다 - 결국 fx1함수 호출임 = fx1();
    fx2();
    // f.fx1(); //4번줄로 인해 전체 함수 호출이면 이렇게 밑에 함수 호출 가능

    const [name, setName] = useState();
    const inputRef = useRef();

    // 마운트, 언마운트
    useEffect(() => {                   // useEffect() return되고나서 실행될 함수 정의
        console.log("마운트(장착)")
        console.log(inputRef.current.value)
        return () => {                  // 이건 화면에서 사라질때
            console.log("언마운트(해제)")
        }
    })

    console.log("랜더링2")

    return (
        <div>
            <input type="text" ref={inputRef} value={"abc"} />
        </div>
    );
}

export default DomRef;
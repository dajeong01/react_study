import { useState } from "react";   
import CountHeader from "../CountHeader/CountHeader";
import CountButton from "../CountButton/CountButton";

function CountState() {
    /* 그냥 지역변수면 함수 재호출이 될때마다 초기화로 10이 나올텐데 
        useState를 사용하면 렌더링(재호출)될 때마다 초기화되지 않고 상태를 유지함 */ 
              
    // const countState = useState(10); 
    // const count = countState[0]; 
    // const setCount = countState[1];  => 이걸 결국 비구조하겠다!!! 이말이다!!!

    const [count, setCount] = useState(10);  
    // useState를 사용하여 상태 변수와 상태 업데이트 함수를 선언(비구조화 할당)

    // let count = 0;
    console.log("렌더링");

    const handleOnClick = (e) => {
        console.log(e);
        console.log(e.target.value);
        const num = parseInt(e.target.value);
        console.log(typeof(num));
        // countState[0] += num;  // countState[0]는 상태 변수, countState[1]은 상태 업데이트 함수
        // countState[1](countState[0] + num);

        setCount(count + num);  // 상태 업데이트 함수 호출
    }

    return <div>
        {/* <h1>{count}</h1>    렌더링 시 count는 0으로 초기화됨 (count는 함수 내부의 지역 변수이기 때문) */}

        <CountHeader count={count} />
        {/* CountHeader 컴포넌트에 count를 props로 전달 */} 

        <button onClick={handleOnClick} value={1}>+1</button>
        <button onClick={handleOnClick} value={-1}>-1</button>
        
        <CountButton text={"+1"} value={1} onClick={handleOnClick} />
        <CountButton text={"-1"} value={-1} onClick={handleOnClick} />

    </div>
}

export default CountState;

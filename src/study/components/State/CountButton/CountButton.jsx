function CountButton ({ text, value, onClick }) {
    // CountButton 컴포넌트는 버튼을 렌더링하고 클릭 이벤트를 처리하는 역할
    console.log("CountButton 렌더링");
    return <button onClick={onClick} value={value}>{text}</button>
}

export default CountButton;
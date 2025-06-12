import { useState } from "react";

function Inputstate4() {
    const inputValueEmpty = {
        productName: "",
        price: "",
        stock: "",
    };
    const [inputValue, setInputValue] = useState(inputValueEmpty);  // 객체
    const [products, setProducts] = useState([]);                   // 배열

    const handleOnChange = (e) => {
        // const {name, value} = e.target   // 이래쓰면 16번 대신 17번 쓰면됨
        setInputValue((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
            // [name]: value
        }))
    }

    const handleOnClick = e => {
        console.log(inputValue)
        // setProducts((prev) => {
        //     const newArray = prev;
        //     newArray.push(inputValue);
        //     return newArray;
        // }); 이걸 한줄로 줄인게 바로 밑줄
        setProducts((prev) => [...prev, inputValue]);
        setInputValue(inputValueEmpty);
    };

    return (
        <div>
            <div>
                <label>상품명</label>
                <input type="text" name="productName" value={inputValue.productName} onChange={handleOnChange} />
            </div>
            <div>
                <label>가격</label>
                <input type="text" name="price" value={inputValue.price} onChange={handleOnChange} />
            </div>
            <div>
                <label>수량</label>
                <input type="text" name="stock" value={inputValue.stock} onChange={handleOnChange} />
            </div>
            <div>
                <button onClick={handleOnClick}>확인</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>상품명</th>
                        <th>가격</th>
                        <th>수량</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={index}>
                            <td>{product.productName}</td>
                            <td>{product.price}</td>
                            <td>{product.stock}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Inputstate4;

import React, { useState } from 'react'

const Product = () => {
        
        // 상태
        const [quantity, setQuantity] = useState(1);
        const price = 1000;     // 상품 단가

        // 수량 증가 함수
        const increaseQuantity = () => {
            setQuantity(quantity + 1);
        };

        // 수량 감소 함수
        const decreaseQuantity = () => {
            if(quantity > 1){
                setQuantity(quantity -1);
            }
        };
        
        // 총 가격 계산
        const totalPrice = price * quantity;

        return (
            <div>
                <h2>상품 정보</h2>
                <ul>
                    <li>가격 : {price}</li>
                    <li>수량 : {quantity}</li>
                    <li>총 가격 : {totalPrice}</li>
                </ul>
                <button onClick={increaseQuantity}>+</button>
                <button onClick={decreaseQuantity}>-</button>
            </div>
        )
}

export default Product
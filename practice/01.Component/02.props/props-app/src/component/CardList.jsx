import React from 'react'
import Card from './Card';

const CardList = () => {

    // Card 컴포넌트에 전달할 데이터
    const cardData = [
        {id : 1, title : 'Card 1', content : 'Content Card 1'},
        {id : 2, title : 'Card 2', content : 'Content Card 2'},
        {id : 3, title : 'Card 3', content : 'Content Card 3'},
        {id : 4, title : 'Card 4', content : 'Content Card 4'},
        {id : 5, title : 'Card 5', content : 'Content Card 5'}
    ];

    return (
        <div>
            <h1>Card List</h1>
            {/* <Card key = {0} title = {cardData[0].title} content = {cardData[0].content}></Card> */}
            {/* <Card key = {1} title = {cardData[1].title} content = {cardData[1].content}></Card> */}
            {/* <Card key = {2} title = {cardData[2].title} content = {cardData[2].content}></Card> */}

            {/* 위 내용을 반복문으로 돌려보자 */}
            {
                cardData.map((card, index) => {
                    return <Card key = {index} title = {card.title} content = {card.content} />
                })
            }
        </div>
    )
}

export default CardList
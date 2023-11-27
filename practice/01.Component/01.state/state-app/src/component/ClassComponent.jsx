import React, { Component } from 'react'

export class ClassComponent extends Component {

    // 생성자 함수
    constructor(props) {
        super(props)

        // 상태 정의
        this.state = {
            name : "LEEYUNA",
        }

        // 컴포넌트에 함수를 바인딩(연결)
        this.handleClickLEEYUNA = this.handleClickLEEYUNA.bind(this)
        this.handleClick이유나 = this.handleClick이유나.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    // 아래에서 호출 할 함수를 아래에 정의해보자.

    // LEEYUNA 버튼 클릭 시,
    handleClickLEEYUNA() {
        console.log('LEEYUNA Click');

        // 상태 설정
        this.setState({name : 'LEEYUNA'})
    }

    // 이유나 버튼 클릭 시,
    handleClick이유나() {
        console.log('이유나 Click');

        // 상태 설정
        this.setState({name : '이유나'})
    }

    // 버튼 클릭 시, (LEEYUNA, 이유나를 하나의 함수로 묶어보자)
    handleClick(newName) {
        console.log(`Click ${newName}`);
        this.setState({name : newName})
    }

    
    render() {
        const {name} = this.state
        return (
            <div>
                <h1>클래스 컴포넌트</h1>
                <h2>안뇽 나는 {name}야</h2>
                {/* <button onClick={this.handleClickLEEYUNA}>LEEYUNA</button> */}
                {/* <button onClick={this.handleClick이유나}>이유나</button> */}
                <button onClick={() => this.handleClick('LEEYUNA')}>LEEYUNA</button>
                <button onClick={() => this.handleClick('이유나')}>이유나</button>
            </div>
        )
    }
}

export default ClassComponent
import logo from './logo.svg';
import './App.css';
import React from 'react';

// 클래스형 컴포넌트
class App extends React.Component {
  
  render() {

    // React 엘리먼트 생성
    /*
      <div>
        <h1>Hello Element</h1>
        <p>This is an Element</p>
      </div>
    */
   
   // 클래스 속성 추가해서 css를 먹여보자
   const box = React.createElement('div', {
     className : 'box'
   }, 'Box')


    // 방법1) React JavaScript로 엘리먼트 생성 => 코드가 지저분하다! 앞으로 거의 사용 안 할 것
    const link = React.createElement('a', {
      href : 'http://www.google.com',
      target : '_blank',           // 새 창에서 열겠다
      style : {color : 'blue'}     // 스타일을 객체 형태로 넣음
    }, '구글 사이트로 가기')        // 자식 요소 넣기

    const element = React.createElement('div', null,
      React.createElement('h1', null, 'Hello Element'),
      React.createElement('p', null, 'This is an Element'),
      link,
      box
    );


    // 방법2) JSX로 엘리먼트 생성
    const element2 = (<div>
                        <h1>Hello Element2</h1>
                        <p>This is an Element2</p>
                        <a href='http://www.google.com'
                           target='_blank'
                           style={{color : 'blue'}}>구글 사이트로 가기
                        </a>
                        <div className='box'>Box</div>
                      </div>)


    return element2
  } 
}

export default App;

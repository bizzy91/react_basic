// React 모듈 불러오기
import React from 'react';


// // Hello 라는 이름의 컴포넌트 생성하기
// function Hello() {
//   // JSX, 리액트에서 생김새를 정의할 때 쓰는 문법
//   return <div>First Component</div>
// }

// // property 추가하기
// function Hello(props) {
//   return <div style={{ color: props.color }}>Hello, {props.name}</div>
// }

// // props(properties) 는 이런 식으로도 정의할 수 있다.
// function Hello({ color, name }) {
//     return <div style={{ color }}>Hello, {name}</div>
//   }

// 조건에 따른 랜더링을 위해 isSpecial 이라는 property를 추가하고 삼항 연산자를 이용한다.
function Hello({ color, name, isSpecial }) {
return (
    <div style={{ color }}>{ isSpecial ? <b>*</b> : null }Hello, {name}</div>
    // 논리합 연산자를 이용한 방법
    // <div style={{ color }}>{isSpecial && <b>*</b>}Hello, {name}</div>

);
}

// 컴포넌트에 props 를 지정하지 않았을 때 기본적으로 사용 할 값을 설정하고 싶다면 컴포넌트에 defaultProps 라는 값을 설정하면 된다.
Hello.defaultProps = {
    name: 'No Name'
}


// Hello 를 컴포넌트로 내보내기
export default Hello;
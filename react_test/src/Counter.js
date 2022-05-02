import React, { useState } from 'react';


function Counter() {
    // const number = numberState[0];
    // const setNumber = numberState[1];
    // 배열 비구조화 할당
    // https://learnjs.vlpt.us/useful/06-destructuring.html#%EB%B0%B0%EC%97%B4-%EB%B9%84%EA%B5%AC%EC%A1%B0%ED%99%94-%ED%95%A0%EB%8B%B9
    const [number, setNumber] = useState(0);
  
    const onIncrease = () => {
      setNumber(number + 1);
    }
    // 함수형
    // const onIncrease = () => {
    //   setNumber(prevNumber => prevNumber + 1);
    // }    
    const onDecrease = () => {
      setNumber(number - 1);
    }
    // 함수형
    // const onDecrease = () => {
    //   setNumber(prevNumber => prevNumber - 1);
    // }
  
    return (
      <div>
        <h1>{number}</h1>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    );
  }
  

export default Counter;
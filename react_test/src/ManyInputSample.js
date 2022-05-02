// useRef -> getElementById, querySelector 같은 DOM Selector 함수
import React, { useState, useRef } from 'react';

function ManyInputSample() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: ''
  });
  // nameInput.current 라는 객체에 ref로 지정한 Element 의 DOM 값을 확인/관리할 수 있다.
  const nameInput = useRef();

  const { name, nickname } = inputs;  // 비구조화 할당을 통해 값 추출

  const onChange = (e) => {
    const { value, name } = e.target;  // 우선 e.target 에서 name 과 value 를 추출
    // inputs[name] = value; <- 이런 식으로 수정하면 안되고 아래와 같이 새로운 객체를 만들어 그 객체에 변화를 주고 이를 상태로 사용해야 한다.
    setInputs({
      ...inputs,  // 기존의 input 객체를 복사한 뒤
      [name]: value  // name 키를 가진 값을 value 로 설정
    });
  };

  const onReset = () => {
    setInputs({
      name: '',
      nickname: '',
    })
    // 초기화 버튼을 클릭했을 때 input에 포커스가 잡히도록 한다.
    nameInput.current.focus();
  };

  return (
    <div>
      <input
        name="name"
        placeholder="이름"
        onChange={onChange}
        value={name}
        // DOM 을 확인/관리하기 위해 ref 로 nameInput 를 지정한다.
        // 초기화 후 input 태그에 마우스 커서를 대면 ref 의 값이 포커싱 된다.
        ref={nameInput}
      />
      <input
        name="nickname"
        placeholder="닉네임"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default ManyInputSample
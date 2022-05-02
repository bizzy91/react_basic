// 기본 틀
// import React from 'react';

// function InputSample() {
//   return (
//     <div>
//       <input />
//       <button>초기화</button>
//       <div>
//         <b>값: </b>
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react';

function InputSample() {
  // 배열 비구조화 할당
  const [text, setText] = useState('');
  // onChange Method, input 태그 안에 변화하면 이벤트가 발생한 DOM(e.target)의 value 를 변화한 Text로 설정한다.
  const onChange = (e) => {
    setText(e.target.value);
  };
  // onReset Method, 초기화 버튼에 대한 onClick 이벤트 -> Text를 빈 문자열로 설정
  const onReset = () => {
    setText('');
  };

  return (
    <div>
      <input onChange={onChange} value={text}  />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: {text}</b>
      </div>
    </div>
  );
}

export default InputSample;
import React, { useState, useRef } from "react";

export default function InputSample() {
  const [inputs, setInputs] = useState({
    username: "",
    nickname: "",
  });

  // useRef() 를 사용하여 Ref 객체를 만들기
  const nameInput = useRef();

  // 비구조화 할당을 통해 값 추출
  const { username, nickname } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    // 가장 중요한 점은 리액트에서 객체를 업데이트하게 될 때에는 기존 객체를 직접 수정하면 안되고, 새로운 객체를 만들어서, 새 객체에 변화를 주어야 됩니다.
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value 로 설정
    });
  };

  const onReset = () => {
    setInputs({
      username: "",
      nickname: "",
    });
    // Ref객체의 .current 값은 우리가 원하는 DOM을 가르킵니다.
    nameInput.current.focus();
  };

  return (
    <div>
      <h1>InputSample.js</h1>
      <input
        name="username"
        placeholder="이름"
        onChange={onChange}
        value={username}
        ref={nameInput} // 선택하고 싶은 dom에 ref값으로 설정해주기
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
        {username} ({nickname})
      </div>
    </div>
  );
}

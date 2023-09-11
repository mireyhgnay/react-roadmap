import React, { useState } from "react";

export default function Counter() {
  // 배열의 첫번째 원소는 현재 상태, 두번째 원소는 Setter 함수입니다.
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    // Setter 함수는 파라미터로 전달 받은 값을 최신 상태로 설정해줍니다.
    // setNumber(number + 1); // 업데이트 하고 싶은 새로운 값을 파라미터로 넣어주고 있다.

    // 함수형 업데이트
    setNumber((prevNumber) => prevNumber + 1);
  };

  const onDecrease = () => {
    // setNumber(number - 1); // 업데이트 하고 싶은 새로운 값을 파라미터로 넣어주고 있다.
    setNumber((prevNumber) => prevNumber - 1);
  };

  return (
    <div>
      <h1>Counter.js</h1>
      <h2>{number}</h2>
      {/* 
        리액트에서 엘리먼트에 이벤트를 설정해줄때에는 on이벤트이름={실행하고싶은함수} 형태로 설정해주어야 합니다. 
        onClick={onIncrease()} 처럼 함수로 적어버리면 렌더링되는 시점에서 함수가 호출되기 때문에
        함수타입의 값을 넣어주어야 합니다.
      */}
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

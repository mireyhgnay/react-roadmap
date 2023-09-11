import React from "react";
import Hello from "./Hello";

function App() {
  const name = "react";

  // 인라인 스타일로 추가되는 경우
  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: 24, // 기본 단위 px
    padding: "1rem", // 다른 단위 사용 시 문자열로 설정
  };

  return (
    // 주석
    /* 주석주석 */
    <>
      <Hello
      // 열리는 태그 내부에서는 이렇게 주석을 작성 할 수 있습니다.
      />
      <p style={style}>안녕하세요~!</p>
      <div className="name">{name}</div>
    </>
  );
}

export default App;

import React from "react";

// 비구조화 할당을 통한 props 설정
export default function Hello({ color, name }) {
  /**
   * style={{ }} 중괄호 두번 사용하는 이유
   * jsx 문법상 한번 감싸줘야 하고
   * 그 안에 {} 중괄호는 객체리터럴을 사용하기 위한 중괄호 입니다.
   */
  return <h1 style={{ color }}>안녕하세요 {name}</h1>;
}

Hello.defaultProps = {
  name: "이름없음",
};

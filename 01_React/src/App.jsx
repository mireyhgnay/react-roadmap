import React, { useRef } from "react";
import Hello from "./Hello";
import Wrapper from "./Wrapper";
import Counter from "./Counter";
import InputSample from "./InputSample";
import UserList from "./UserList";

function App() {
  const name = "변수로 전달한 name";

  // 인라인 스타일로 추가되는 경우
  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: 24, // 기본 단위 px
    padding: "1rem", // 다른 단위 사용 시 문자열로 설정
  };

  const users = [
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
    },
  ];

  const nextId = useRef(4);
  const onCreate = () => {
    // 나중에 구현 할 배열에 항목 추가하는 로직
    // ...

    nextId.current += 1;
  };

  return (
    // 주석
    /* 주석주석 */
    <>
      <Wrapper>
        <Hello
          name={name}
          // 열리는 태그 내부에서는 이렇게 주석을 작성 할 수 있습니다.
        />
        <Hello name="props로 전달한 name" color="red" isSpecial />
        <Hello color="pink" />
      </Wrapper>

      <Wrapper>
        <Counter />
      </Wrapper>

      <Wrapper>
        <InputSample />
      </Wrapper>

      <Wrapper>
        <UserList users={users} />
      </Wrapper>
    </>
  );
}

export default App;

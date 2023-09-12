import React, { useRef, useState } from "react";
import Hello from "./Hello";
import Wrapper from "./Wrapper";
import Counter from "./Counter";
import InputSample from "./InputSample";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function App() {
  const name = "변수로 전달한 name";

  // 인라인 스타일로 추가되는 경우
  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: 24, // 기본 단위 px
    padding: "1rem", // 다른 단위 사용 시 문자열로 설정
  };

  // users 도 useState 를 사용하여 컴포넌트의 상태로서 관리됨
  const [users, setUsers] = useState([
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
  ]);

  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });
  const { username, email } = inputs;
  // input 상태 관리
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    setUsers([...users, user]); // users 배열을 복사해서 새로 등록되는 user 를 추가해줌

    setInputs({
      // input 초기화
      username: "",
      email: "",
    });
    nextId.current += 1;
  };

  const onRemove = (id) => {
    // user.id 가 id와 일치하지 않는 원소만 추출해서 새로운 배열을 만든다.
    setUsers(users.filter((user) => user.id !== id));
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
        <CreateUser
          username={username}
          email={email}
          onChange={onChange}
          onCreate={onCreate}
        />
        <UserList users={users} onRemove={onRemove} />
      </Wrapper>
    </>
  );
}

export default App;

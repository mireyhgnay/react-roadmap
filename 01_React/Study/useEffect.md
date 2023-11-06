# 20. useEffect

<br>

### useEffect는 컴포넌트의 **마운트 / 언마운트 / 업데이트**에 따라 실행된다는 것을 기억하자!

- 마운트 : 컴포넌트가 처음 생성됐을 때
- 언마운트(clean up 함수) : 컴포넌트가 사라질 때
- 업데이트 : 특정 props가 바뀔 때

<br>

### deps가 빈배열 일 때

```jsx
useEffect(() => {
  // 컴포넌트가 마운트 됐을 때
  console.log("컴포넌트가 화면에 나타남");

  return () => {
    // 컴포넌트가 언마운트 (clean up) 될 때 (=사라질 떄)
    console.log("컴포넌트가 화면에서 사라짐");
  };
}, []);
```

- return 안에 내용은 언마운트 될 때 실행된다.

<br>
<br>

### deps가 존재할 떄 (ex. users 라는 프로퍼티)

```jsx
useEffect(() => {
  // users가 마운트 됐을 때(맨 처음) / users가 변경되고 나서
  console.log(
    "컴포넌트가 화면에 나타남(users에 변동이 있었던 것이나 마찬가지!) or users가 변경됨"
  );

  return () => {
    // users의 값이 변경되기 직전!에 실행됨
    console.log("users가 변경됩니다!");
  };
}, [users]);
```

- deps가 있는 경우, return 안에 내용은 deps 의 값이 변경되기 직!전!에! 실행됩니다.

<br>
<br>

### return만 있는 경우

```jsx
// 컴포넌트가 언마운트 될 때만 실행됩니다.
useEffect(() => {
  return () => {
    // 컴포넌트가 사라질때 실행될 내용ㄴ
    console.log("컴포넌트가 화면에서 사라짐");
  };
}, []);
```

<br>
<br>

### [], deps 내용 자체가 없는 경우, 컴포넌트가 리렌더링 될 때마다 실행

```jsx
// 컴포넌트가 리렌더링 될때마다 실행된다.
useEffect(() => {
  console.log("컴포넌트가 화면에 나타남");
  return () => {
    console.log("컴포넌트가 화면에서 사라짐");
  };
});
```

<br>
<br>

### [user, id ] 여러개가 들어간 경우

```jsx
// 컴포넌트가 리렌더링 될때마다 실행된다.
useEffect(() => {
  console.log("컴포넌트가 화면에 나타남");
  return () => {
    console.log("컴포넌트가 화면에서 사라짐");
  };
}, [users, id]);
```

- users, id 에 변동이 있을 때마다 각 프로퍼티에 useEffect 함수가 실행됩니다.
- 문제는(?) 두 개가 같이 변경되면 함수를 두번 불러오게 되는 것
- 그래서 잘쓰진 않지만, 필요한 경우들이 있으니 잘 판단해서 써야합니다.

두개가 같이 변경되면 함수가 2번 불러오게됨.

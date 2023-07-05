// import "./App.css";
// import "./reset.css";
// import styled from "styled-components";
// import TestPage from "./components/TestPage";
// import GlobalStyle from "./components/GlobalStyle";

// const StContainer = styled.div`
//   display: flex;
// `;

// const StBox = styled.div`
//   width: 100px;
//   height: 100px;
//   border: 1px solid ${(props) => props.borderColor};
//   margin: 20px;
//   background-color: ${(props) => props.backgroundColor};
// `;

// //박스의 색 (하드코딩 대신)
// const boxList = ["red", "blue", "green", "pink"];

// //색을 넣으면 -> 이름을 변환
// const getBoxName = (color) => {
//   switch (color) {
//     case "red":
//       return "빨간 박스";
//     case "blue":
//       return "파란 박스";
//     case "green":
//       return "초록 박스";
//     default:
//       return "검정 박스";
//   }
// };

// function App() {
//   return (
//     // <StContainer>
//     //   {/* 이렇게 하드코딩 하는 대신 ... */}
//     //   {/* <StBox borderColor="red" backgroundColor="yellow">
//     //     빨간박스
//     //   </StBox>
//     //   <StBox borderColor="blue">파란박스</StBox>
//     //   <StBox borderColor="green">초록박스</StBox> */}
//     //   {boxList.map((box) => {
//     //     return <StBox borderColor={box}>{getBoxName(box)}</StBox>;
//     //   })}
//     // </StContainer>
//     <>
//       <GlobalStyle />
//       <TestPage title="제목" contents="내용" />
//     </>
//   );
// }

// export default App;
//----------------------------------------------------------------------//
//4강. useEffect
// import { useEffect, useState } from "react";
// import "./App.css";

// function App() {
//   const [value, setValue] = useState("");

//   useEffect(() => {
//     console.log(`hello useEffect! : ${value}`);
//   }, [value]);

//   return (
//     <div>
//       <input
//         type="text"
//         value={value}
//         onChange={(event) => setValue(event.target.value)}
//       />
//     </div>
//   );
// }

// export default App;

//----------------------------------------------------------------------//
//5강. React Hooks
// import React, { useRef } from "react";

// function App() {
//   //ref : reference
//   const ref = useRef("초기값"); //이렇게 설정된 ref값 : 컴포넌트가 계속해서 랜더링되어도, unmount 전까지 값을 유지
//   console.log("ref", ref);

//   ref.current = "변경값";
//   console.log("ref", ref);

//   return <div>App</div>;
// }

// export default App;

//----------------------------------------------------------------------//
//5강.
// import React, { useRef, useState } from "react";

// const style = {
//   border: "1px solid black",
//   margin: "10px",
//   padding: "10px",
// };

// function App() {
//   //
//   const [count, setCount] = useState(0);
//   const countRef = useRef(0);

//   //
//   const plustStateCount = () => {
//     setCount(count + 1);
//   };
//   const plusRefCount = () => {
//     //화면에 랜더링은 안되지만
//     countRef.current++;
//     //콘솔로 찍어보면 계속 값이 ++됨
//     console.log(countRef.current);
//   };

//   return (
//     <>
//       <div style={style}>
//         state영역입니다. {count} <br />
//         <button onClick={plustStateCount}>state 증가</button>
//       </div>
//       <div style={style}>
//         ref 영역입니다. {countRef.current} <br />
//         <button onClick={plusRefCount}>ref 증가</button>
//       </div>
//     </>
//   );
// }

// export default App;

//----------------------------------------------------------------------//
//5강. pw 인풋란에 자동 포커싱되도록
// import React, { useEffect, useRef } from "react";

// function App() {
//   const pwRef = useRef("");

//   //화면이 랜더링될 때, 어떤 작업을 하고 싶다? : useEffect
//   useEffect(() => {
//     pwRef.current.focus();
//     console.log("랜더링 됐어요!");
//   }, []);

//   return (
//     <>
//       <div>
//         아이디 : <input type="text" />
//       </div>
//       <div>
//         비밀번호 : <input type="password" ref={pwRef} />
//       </div>
//     </>
//   );
// }

// export default App;

//----------------------------------------------------------------------//
//5강. 아이디란에 10자 이상 입력시 -> pw란으로 자동 포커싱되도록
// import React, { useEffect, useRef, useState } from "react";

// function App() {
//   //
//   const idRef = useRef("");
//   const pwRef = useRef("");

//   //
//   const [id, setId] = useState("");

//   //useEffect(1) : 먼저 id란에 포커싱 되었다가,
//   useEffect(() => {
//     idRef.current.focus();
//   }, []);

//   //useEffect(2) : id란이 10자리 이상 넘어가면
//   useEffect(() => {
//     if (id.length >= 10) {
//       pwRef.current.focus();
//     }
//   }, [id]); //id라는 state가 바뀔 때마다 useEffect가 실행되어야 하므로!

//   return (
//     <>
//       <div>
//         아이디 :{" "}
//         <input
//           type="text"
//           ref={idRef}
//           value={id}
//           onChange={(event) => {
//             setId(event.target.value);

//             //
//             // if (id.length >= 10) {
//             //   pwRef.current.focus();
//             // }
//           }}
//         />
//       </div>
//       <div>
//         비밀번호 : <input type="password" ref={pwRef} />
//       </div>
//     </>
//   );
// }

// export default App;

//----------------------------------------------------------------------//
//6강. UseContext
// import React from "react";
// import GrandFather from "./components/GrandFather";

// function App() {
//   return <GrandFather />;
// }

// export default App;

//----------------------------------------------------------------------//
//7강.
// import { useCallback } from "react";
// import React, { useState } from "react";
// import Box1 from "./components/Box1";
// import Box2 from "./components/Box2";
// import Box3 from "./components/Box3";

// function App() {
//   console.log("App 컴포넌트가 랜더링되었습니다!");
//   const [count, setCount] = useState(0);

//   //1 증가
//   const onPlusButtonHandler = () => {
//     setCount(count + 1);
//   };

//   //1 감소
//   const onMinusButtonHandler = () => {
//     setCount(count - 1);
//   };

//   //count를 초기화해주는 함수
//   const initCount = useCallback(() => {
//     console.log(`${count}에서 0으로 변경되었습니다.`);
//     setCount(0);
//   }, []);

//   return (
//     <>
//       <h3>카운트 예제입니다!</h3>
//       <p>현재 카운트 : {count}</p>
//       <button onClick={onPlusButtonHandler}>+</button>
//       <button onClick={onMinusButtonHandler}>-</button>
//       <div
//         style={{
//           display: "flex",
//           marginTop: "10px",
//         }}
//       >
//         <Box1 initCount={initCount} />
//         <Box2 />
//         <Box3 />
//       </div>
//     </>
//   );
// }

// export default App;

//----------------------------------------------------------------------//
//9강.
//🤔useMemo 써도 빠른 업뎃이 안되는데 ??????
// import React from "react";
// import HeavyComponent from "./components/HeavyComponent";

// function App() {
//   return (
//     <>
//       <nav
//         style={{
//           backgroundColor: "yellow",
//           marginBottm: "30px",
//         }}
//       >
//         네비게이션 바
//       </nav>
//       <HeavyComponent />
//       <footer
//         style={{
//           backgroundColor: "green",
//           marginBottm: "30px",
//         }}
//       >
//         푸터 영역이에요.
//       </footer>
//     </>
//   );
// }

// export default App;

//----------------------------------------------------------------------//
//9강.
// import React from "react";
// import ObjectComponent from "./components/ObjectComponent";

// function App() {
//   return <ObjectComponent />;
// }

// export default App;

//----------------------------------------------------------------------//
//13강. redux
// import React from "react";
// import "./App.css";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
// import { PLUS_ONE, MINUS_ONE } from "./redux/modules/counter";
// import { plusOne, minusOne } from "./redux/modules/counter";

// function App() {
//   //1. 여기에서 store에 접근하여, counter의 값을 읽어오고 싶다! => useSelector라는 훅을 쓰면 됨

//   //1-1.이렇게 하면 counter, users 모두의 값을 가져올 수 있고
//   const data = useSelector((state) => {
//     return state;
//   });

//   console.log("counter와 users 모두의 값을 가져오고 싶어요", data);

//   //1-2. 이렇게 하면 counter만의 값을 가져올 수 있음
//   const counter = useSelector((state) => {
//     return state.counter;
//   });

//   console.log("counter값만 가져오고 싶어요", counter.number); //콘솔에 객체 형태로 찍힘

//   //2. dispatch를 써보자. (명령을 던저주기 위해)
//   const dispatch = useDispatch();

//   return (
//     <>
//       <div>현재 카운트 : {counter.number}</div>
//       <button
//         onClick={() => {
//           //+1을 해주는 로직을 써주자.
//           //방법1: action value
//           // dispatch({
//           //   type: PLUS_ONE,
//           //   // payload
//           // });
//           //방법2: action creator
//           dispatch(plusOne());
//         }}
//       >
//         +
//       </button>
//       <button
//         onClick={() => {
//           //-1을 해주는 로직을 써주자 => ? => 모듈 속 리듀서가 정의해 놓은 방법(switch 부분..)을 써야 함 => 그다음 app.jsx로 와서 dispatch()로 명령을 보내줌
//           //방법1.
//           // dispatch({
//           //   type: MINUS_ONE,
//           //   // payload
//           // });
//           //방법2.
//           dispatch(minusOne());
//         }}
//       >
//         -
//       </button>
//     </>
//   );
// }

// export default App;

//----------------------------------------------------------------------//
// //17강. (위의 코드 연장선)
import React from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { plusOne, minusOne, plusN, minusN } from "./redux/modules/counter";

function App() {
  //
  const [number, setNumber] = useState(0);

  const counter = useSelector((state) => {
    return state.counter; // 이 반환값은 결국 변수 counter에 저장됨을 잊지말기
  });

  //input태그에 건 onChange 이벤트 핸들러가 잘 동작하는지 보기 위함
  // useEffect(() => {
  //   console.log("number값이 갱신됩니다", number);
  // }, [number]);

  //
  const dispatch = useDispatch();

  return (
    <>
      <div>현재 카운트 : {counter.number}</div>
      <div>
        {/* 타입을 number로 지정 -> 크롬에서 +,- 드롭다운 지원해줌 */}
        <input
          type="number"
          value={number}
          // onChange={(event) => {
          //   setNumber(+event.target.value); //문자열을 -> 숫자로 알아서 바꿔줌
          // }}
          onChange={(event) => {
            const { value } = event.target; //구조분해할당
            setNumber(+value);
          }}
        />
      </div>
      <button
        onClick={() => {
          //plusN()에 인자로 number를 넣어줌 (확인해보기)
          dispatch(plusN(number));
          //실제로는 이런 의미
          //   dispatch({
          //     type: "counter/PLUS_N",
          //     payload: 3,
          //   });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          // dispatch(minusN(number));
        }}
      >
        -
      </button>
    </>
  );
}

export default App;

//----------------------------------------------------------------------//
// import "./App.css";
// import Router from "./shared/Router";

// function App() {
//   return <Router />;
// }

// export default App;

//📌21강.
// import React, { useEffect, useState } from "react";

// function App2() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => response.json())
//       .then((json) => {
//         setData([...json]);
//         return console.log(json);
//       }); //json이 원래 배열이므로 -> 풀어줬다가(새로운 값이 들어왔음을 나타냄) -> []로 다시 묶어줌
//   }, []);
//   return (
//     <div>
//       <h3>JSON Placeholder DATA</h3>
//       {data.map(function (item) {
//         return (
//           <div style={{ border: "1px solid black", margin: "5px" }}>
//             <ul>
//               <li>{item.userId}</li>
//               <li>{item.id}</li>
//               <li>{item.title}</li>
//               <li>{item.body}</li>
//             </ul>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default App2;

//----------------------------------------------------------------------------//
//📌1강.
// import React from "react";
// import "./App.css";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
// import { useState, useEffect } from "react";
// import { plusOne, minusOne, plusN, minusN } from "./redux/modules/counter";
// import { addNumber, minusNumber } from "./redux/modules/counter2";

// function App2() {
//   //UseSelectors
//   const number = useSelector((state) => state.counter2.number);
//   console.log(number);

//   //hooks
//   const dispatch = useDispatch();

//   //handlers
//   const onPlusbuttonClickHandler = () => {
//     dispatch(addNumber(1));

//     // dispatch(
//     //   {
//     //     type: ADD_NUMBER,
//     //     payload,
//     //   }
//     // )
//   };

//   //
//   //
//   const onMinusbuttonClickHandler = () => {
//     dispatch(minusNumber(1));
//   };

//   return (
//     <div>
//       {number}
//       <br />
//       <button onClick={onPlusbuttonClickHandler}>+</button>
//       <button onClick={onMinusbuttonClickHandler}>-</button>
//     </div>
//   );
// }

// export default App2;
//----------------------------------------------------------------------------//
//📌9강.

import { useDispatch, useSelector } from "react-redux";

import { useState } from "react";
import {
  __addNumber,
  __minusNumber,
  addNumber,
  minusNumber,
} from "./redux/modules/counter2Slice";

function App2() {
  //UseSelectors
  const globalNumber = useSelector((state) => state.counter2.number);
  //UseStates
  const [number, setNumber] = useState(0);
  //hooks
  const dispatch = useDispatch();
  //E.H
  const onClickAddNumberHandler = () => {
    // dispatch(addNumber(+number));
    dispatch(__addNumber(+number));
  };
  const onClickMinusNumberHandler = () => {
    dispatch(minusNumber(+number));
    dispatch(__minusNumber(+number));
  };

  return (
    <div>
      <div>{globalNumber}</div>
      <input
        type="number"
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <button onClick={onClickAddNumberHandler}>더하기</button>
      <button onClick={onClickMinusNumberHandler}>빼기</button>
    </div>
  );
}

export default App2;

// 일반 리덕스 예시 코드

import { createSlice } from "@reduxjs/toolkit";

// // Action Value
// const ADD_NUMBER = "ADD_NUMBER";
// const MINUS_NUMBER = "MINUS_NUMBER";

// // Action Creator
// export const addNumber = (payload) => {
//   return {
//     type: ADD_NUMBER,
//     payload,
//   };
// };

// export const minusNumber = (payload) => {
//   return {
//     type: MINUS_NUMBER,
//     payload,
//   };
// };

// Initial State
const initialState = {
  number: 0,
};

// // Reducer
// const counter2 = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_NUMBER:
//       return {
//         number: state.number + action.payload,
//       };
//     // [퀴즈 답]
//     case MINUS_NUMBER:
//       return {
//         number: state.number - action.payload,
//       };
//     default:
//       return state;
//   }
// };

//----------------------------------//
//위의 2개를 합친 것
const counterSlice = createSlice({
  name: "counter2",
  initialState,
  reducers: {
    addNumber: (state, action) => {
      state.number = state.number + action.payload;
    },
    minusNumber: (state, action) => {
      state.number = state.number - action.payload;
    },
  },
});

export default counterSlice.reducer; //1.reducer
export const { addNumber, minusNumber } = counterSlice.actions; //2. acton creator //action: addNumber와 minusNumber를 가지고 있는 리듀서들을 의미 -> 거기서 addNumber, minusNumber를 구조분해할당으로 빼냄 -> action creator처럼 동작

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//2개의 input
// (1)이름: 의미는 크게 없음
// (2)함수
export const __addNumber = createAsyncThunk(
  "ADD_NUMBER_WAIT",
  (paylaod, thunkAPI) => {
    //수행하고싶은 동작: 3초를 기다림
    setTimeout(() => {
      thunkAPI.dispatch(addNumber(paylaod)); //thunkAPI.dispatch(payload) 아니고
    }, 3000);
  }
);
export const __minusNumber = createAsyncThunk(
  "MINUS_NUMBER_WAIT",
  (paylaod, thunkAPI) => {
    //수행하고싶은 동작: 3초를 기다림
    setTimeout(() => {
      thunkAPI.dispatch(minusNumber(paylaod)); //thunkAPI.dispatch(payload) 아니고
    }, 3000);
  }
);
// export const __addNumber = createAsyncThunk(
//   "ADD_NUMBER_WAIT",
//   (paylaod, thunkAPI) => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         thunkAPI.dispatch(addNumber(paylaod)); //thunkAPI.dispatch(payload) 아니고
//       }, 3000);
//     });
//   }
// );
// export const __minusNumber = createAsyncThunk(
//   "MINUS_NUMBER_WAIT",
//   (paylaod, thunkAPI) => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         thunkAPI.dispatch(minusNumber(paylaod)); //thunkAPI.dispatch(payload) 아니고
//       }, 3000);
//     });
//   }
// );

const initialState = {
  number: 0,
};

const counter2Slice = createSlice({
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

export default counter2Slice.reducer; //리듀서
export const { addNumber, minusNumber } = counter2Slice.actions; //액션객체

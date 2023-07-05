//중앙 데이터 관리소(store)를 설정하는 부분

import { createStore } from "redux";
import { combineReducers } from "redux";
//reducer들을 하나로 묶는 api
import users from "../modules/users";

//💼Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";
import counter2 from "../modules/counter2";

//ASIS: 일반 리듀서
//rootReducer : reducer들을 하나로 모아서 -> 한개로 모아놓은 기본 reducer
// const rootReducer = combineReducers({
//   counter: counter,
//   users: users,
// });

// const store = createStore(rootReducer);

//💼Redux Toolkit
//위에서처럼 combineReducers + createStore를 쓰기보다는, configureStore 쓰기를 권장
const store = configureStore({
  reducer: {
    counter2: counter2,
  },
});

export default store;

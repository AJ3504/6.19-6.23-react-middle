// //16강.
// //방법1. action value
// export const PLUS_ONE = "PLUS_ONE"; //변하지 않는 값이므로, 상수로 만듦
// export const MINUS_ONE = "MINUS_ONE";

// //방법2. action creator : action value를 return하는 함수
// export const plusOne = () => {
//   return {
//     type: PLUS_ONE,
//   };
// };

// export const minusOne = () => {
//   return {
//     type: MINUS_ONE,
//   };
// };
// //15강. 초기 상태값(state)
// const initialState = {
//   number: 0,
// };
// // const [number, setNumber] = useState(0)  => 이렇게 쓰여있던걸 위와 같은 표현식으로 바꾼 것

// //리듀서 : 'state에 변화를 일으키는' 함수 (input : state와 action) (state를 action.type에 따라 변경하는 함수)

// const counter = (state = initialState, action) => {
//   switch (action.type) {
//     case PLUS_ONE:
//       // return state + 1;  => 이렇게 하면 undefined가 나옴(객체 형태로 리턴해주는게 아니기 때문에)
//       return {
//         number: state.number + 1, // => 결과값인 1, 2, 3, 4 ... 는 localstate가 업데이트된게 아니라, 스토어에 있는 state가 업데이트된 것.
//       };

//     case MINUS_ONE:
//       return {
//         number: state.number - 1,
//       };
//     default:
//       return state; //아무것도 없을 때 : 최초 state (initialState)를 리턴
//   }
// };

// export default counter;

//----------------------------------------------------------------------//

//17강. (위 코드의 연장선)
//①state 설정

//action value
const PLUS_ONE = "counter/PLUS_ONE";
const MINUS_ONE = "counter/MINUS_ONE";

const PLUS_N = "counter/PLUS_N";
const MINUS_N = "counter/MINUS_N";

//action creator : action value를 return하는 함수
export const plusOne = () => {
  return {
    type: PLUS_ONE,
  };
};

export const minusOne = () => {
  return {
    type: MINUS_ONE,
  };
};

export const plusN = (payload) => {
  console.log(
    "payload에 number를 넘겨줬을 때 어떻게 찍히나? 사용자가 input창에 값 입력 후 버튼을 눌렀을 때 넘겨집니다.",
    payload
  );
  return {
    type: PLUS_N,
    payload: payload,
  };
};

export const minusN = (payload) => {
  return {
    type: MINUS_N,
    payload,
  };
};

//
const initialState = {
  number: 0,
};

//----------②리듀서 설정----------//

//17강. action 객체 = action type을 payload만큼 처리하는 것
//ex. payload가 3이다. 3만큼 action type (plus)를 해라.

const counter = (state = initialState, action) => {
  console.log("왜 이부분은 뭘까2랑 값이 동일할까요??", state);
  switch (action.type) {
    case PLUS_ONE:
      return {
        number: state.number + 1, // => 결과값인 1, 2, 3, 4 ... 는 localstate가 업데이트된게 아니라, 스토어에 있는 state가 업데이트된 것.
      };

    case MINUS_ONE:
      return {
        number: state.number - 1,
      };

    case PLUS_N:
      return {
        number: state.number + action.payload,
      };

    case MINUS_N:
      return {
        number: state.number - action.payload,
      };
    default:
      return state;
  }
};

export default counter;

// useStates 였다면
//   const newTodo = {
//     id: uuid(),
//     title,
//     content,
//     isDone: false,
//   };
//   //다시 배열로 묶어줘야 -> 뒤에서 filter를 쓸 수 있음
//   setTodos([...todos, newTodo]);
// }}

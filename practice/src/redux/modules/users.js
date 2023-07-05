//초기 상태값(state)
const initialState = {
  userId: 123,
};
// const [number, setNumber] = useState(0)  => 이렇게 쓰여있던걸 위와 같은 표현식으로 바꾼 것

//리듀서 : 'state에 변화를 일으키는' 함수
//input : state와 action

// (1) state를 action.type에 따라 변경하는 함수

const users = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state; //아무것도 없을 때 : 최초 state (initialState)를 리턴
  }
};

export default users;

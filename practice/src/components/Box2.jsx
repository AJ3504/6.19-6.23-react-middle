import React from "react";

const style = {
  width: "100px",
  height: "100px",
  backgroundColor: "blue",
  color: "white",
};

function Box2() {
  console.log("Box2 컴포넌트가 랜더링되었습니다!");
  return <div style={style}>Box2</div>; //콘솔 반드시 찍어보기! => +,- 버튼을 눌렀을 때, 콘솔을 보면 box1, 2, 3 모두 재랜더링되었음을 알 수 있음
}

export default React.memo(Box2);

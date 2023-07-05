import React from "react";

const style = {
  width: "100px",
  height: "100px",
  backgroundColor: "#01c49f",
  color: "white",
};

function Box1({ initCount }) {
  console.log("Box1 컴포넌트가 랜더링되었습니다!"); //콘솔 반드시 찍어보기! => +,- 버튼을 눌렀을 때, 콘솔을 보면 box1, 2, 3 모두 재랜더링되었음을 알 수 있음
  return (
    <div style={style}>
      <button
        onClick={() => {
          initCount();
        }}
      >
        초기화
      </button>
    </div>
  );
}

export default React.memo(Box1);

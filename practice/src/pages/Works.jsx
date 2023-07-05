//19강.
// import React from "react";
// import { Link, useNavigate, useLocation } from "react-router-dom";

// function Works() {
//   const navigate = useNavigate();
//   const location = useLocation(); //나중에 조건부 랜더링할 때 활용

//   // console.log("location이 뭐하는 놈인지 보자", location);

//   return (
//     <div>
//       Works
//       <br />
//       <button
//         onClick={() => {
//           // navigate("/");
//         }}
//       >
//         Home으로 이동
//       </button>
//       <br />
//       <Link to="/contact">contact페이지로 이동하기</Link>
//     </div>
//   );
// }

// export default Works;

//----------------------------------------------------------------------//
//20강.
import React from "react";
import { Link } from "react-router-dom";
import { data } from "../shared/data";

function Works() {
  return (
    <div>
      <h3>할일 목록</h3>
      {data.map((item) => {
        return (
          <div key={item.id}>
            {item.id}
            &nbsp;
            {/* 마치 a태그처럼 동작하고 싶어요 => link태그 적용 */}
            <Link to={`/works/${item.id}`}>{item.todo}</Link>
          </div>
        );
      })}
    </div>
  );
}

export default Works;

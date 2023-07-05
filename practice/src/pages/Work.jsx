import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../shared/data";

function Work() {
  const params = useParams();
  console.log(
    "useParams()를 쓰기 위해 params가 잘 들어오는지 확인하는거야",
    params
  );

  //어떤 데이터요소인지 찾아보기
  const foundData = data.find((item) => {
    return item.id === parseInt(params.id);
  });
  console.log("foundData", foundData);

  return (
    <div>
      <h3>할일: {foundData.todo}</h3>
    </div>
  );
}

export default Work;

import React, { useContext } from "react";
import FontChild from "./FontChild";
import FontContext from "./FontContext";

//실습
//사용자가 글자크기를 입력하고 엔터를 누르면,
// 글자크기가 변경한다.
//입력예시 ) 100px;

const FontParent = () => {
  const { state, actions } = useContext(FontContext);
  const { fontSize } = state;
  const { setFontSize } = actions;

  const handleFontSizeOnKeyDown = (e) => {
    if (e.key === "Enter") {
      setFontSize(e.target.value);
    }
  };

  return (
    <div>
      <h2 style={{ fontSize }}>fontContext 활용하기</h2>
      <input type="text" onKeyDown={handleFontSizeOnKeyDown} />
      <FontChild />
    </div>
  );
};

export default FontParent;

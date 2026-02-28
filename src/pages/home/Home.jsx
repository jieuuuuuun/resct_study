import React from "react";
import S from "./style";
import HomeChild from "./HomeChild";

const Home = () => {
  return (
    <>
      <S.StyledDiv>
        스타일 컴포넌트 안쓰는 정말 외워서 쓰는 하드 코딩 스타일!😥
      </S.StyledDiv>
      <HomeChild />
      <S.StyledButton>스타일로 꾸며 볼 게요!</S.StyledButton>
    </>
  );
};

export default Home;

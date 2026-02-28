import React from "react";
import S from "./style";

const Styled03 = () => {
  // 아이콘 또는 이미지 3장을 가져와서 레이아웃 완성시키기

  return (
    <div>
      <S.ImageWrapper>
        <S.IconWrapper>
          <S.Img
            width={"100px"}
            src={`${process.env.PUBLIC_URL}/assets/images/styled/icon01.png`}
            alt="이미지1"
          />
          <S.Img
            width={"200px"}
            src={`${process.env.PUBLIC_URL}/assets/images/styled/icon02.png`}
            alt="이미지2"
          />
          <S.ImgBg
            width={"300px"}
            height={"300px"}
            alt="이미지3"
          />
        </S.IconWrapper>
      </S.ImageWrapper>
    </div>
  );
};

export default Styled03;

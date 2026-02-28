import React from 'react';
import S from './style';

const Styled02 = () => {
  return (
    <S.ImageWrapper>
      <S.Img width={"200px"} src={`${process.env.PUBLIC_URL}/assets/images/styled/cat.jpg`} alt="캣닢에 취한 고양이!" />
    </S.ImageWrapper>
  );
};

export default Styled02;
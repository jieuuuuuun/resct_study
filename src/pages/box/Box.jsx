import React from 'react';
import S from './style';

const Box = () => {
  //styled Components로 2행 3열 box 구현하기

  return (
    <S.Container>
      <S.Box $color={"red"}>red</S.Box>
      <S.Box $color={"orange"}>orange</S.Box>
      <S.Box $color={"blue"}>blue</S.Box>
      <S.Box $color={"yellow"}>yellow</S.Box>
      <S.Box $color={"green"}>green</S.Box>
      <S.Box $color={"purple"}>purple</S.Box>
    </S.Container>
  );
  
};

export default Box;
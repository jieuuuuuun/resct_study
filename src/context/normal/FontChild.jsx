import React, { useContext } from 'react';
import FontContext from './FontContext';

const FontChild = () => {
  //useContext
  const {state, actions} = useContext(FontContext)
  const {fontSize} = state

  return (
    <div>
      <h1 style={{fontSize}}>useContext</h1>
      <button onClick={() => {
        actions.setFontSize("100px")
      }}>글자 크기 바꾸기</button>
    </div>
  );
};

export default FontChild;
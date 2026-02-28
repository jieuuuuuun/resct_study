import React from 'react';
import C from './C'
import CharContext from './CharContext';

const B = () => {
  return (
    <div>
      <CharContext.Consumer>
        {
          ({fontSize}) => <h1 style={{fontSize}}>context 활용해보기</h1>
        }
      </CharContext.Consumer>
      <C />
      <button>글자 크기 변경</button>
    </div>
  );
};

export default B;
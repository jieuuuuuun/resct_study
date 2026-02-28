import React from 'react';
import CharContext from './CharContext';

const C = () => {
  return (
    <div>
      <CharContext.Consumer>
        {(context) => {
          console.log("context", context);
          return <p style={{color: context.color}}>리액트 context API</p>
        }}  
      </CharContext.Consumer>
    </div>
  );
};

export default C;
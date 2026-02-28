import { faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import S from './style';

const Styled05 = () => {
  return (
    <div>
      {/* <FontAwesomeIcon icon={faComment} beat /> */}
      <S.CommentIcon icon={faComment} beat />
    </div>
  );
};

export default Styled05;
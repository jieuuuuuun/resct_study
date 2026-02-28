import { faArrowRightToBracket, faBars, faHome, faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import S from './style';

const Layout = () => {

  const name = "홍길동"
  return (
    <div>
      <S.Wrapper>
        {/* router에 등록된 자식 요소를 보여주는 태그 */}
        <S.Header>검색하세요!</S.Header>
        <S.MainContent>
          <Outlet context={{
            name:name
          }} />
        </S.MainContent>
        <S.Footer>
          <NavLink to={'/join'}>
            <FontAwesomeIcon icon={faArrowRightToBracket} />
          </NavLink>
          <NavLink to={'/login'}>
            <FontAwesomeIcon icon={faKey} />
          </NavLink>
          <NavLink to={'/'}>
            <FontAwesomeIcon icon={faHome} />
          </NavLink>
          <NavLink to={'/posts'}>
            <FontAwesomeIcon icon={faBars} />
          </NavLink>
          <NavLink to={'/my-page'}>
            <FontAwesomeIcon icon={faUser} />
          </NavLink>
        </S.Footer>
      </S.Wrapper>
    </div>
  );
};

export default Layout;
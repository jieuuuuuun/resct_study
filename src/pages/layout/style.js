import styled from "styled-components";
import { flexColumn } from "../../styles/common";

const S = {}

S.Wrapper = styled.div`
  ${flexColumn}
  height:100vh;
  font-size:20px
`
S.Header = styled.header`
  width:100dvw;
  height:80px;
  border-bottom:solid 1px #333;
  padding: 0 12px;
  display:flex;
  align-items:center;
`
S.MainContent = styled.main`
  flex:1;
  padding: 0 12px;
  overflow:auto
`

S.Footer = styled.footer`
  display:flex;
  align-items:center;
  justify-content:space-between;
  width:100dvw;
  height:80px;
  padding: 0 12px;
  border-top:solid 1px #333;
  border-bottom:solid 1px #333;
  
  & path {
    color: #bec4c9;
  }

  & .active path {
    color:#917CF0;
  }
`

export default S;
import styled from 'styled-components';

const S = {}

S.StyledDiv = styled.div`
  width: 100px;
  height: 100px;
  border: solid 1px #333;
  display: flex;
  justify-content: center;
`

S.StyledButton = styled.button`
  border:none;
  width:500px;
  height:40px;
  color:blue;
  background-color:transparent;
  cursor: pointer;
`
export default S;
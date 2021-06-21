import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

//->모든 브라우저에 동등하게 보이게 하기 위해서 css초기화 작업은 
// 반드시 해야한다. 웹 마다 제공하고 있는 색상. 여백, 글꼴이 다르기 때문.

const GlobalStyle = createGlobalStyle `
  ${reset};
  body {
    padding: 0;
    margin: 0;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 16px;
  };
  button{
    display: flex;
    cussor: pointer;
    outline: home;
    border-radius: 3px;
  };
  input{
    display: flex;
    outline: none;
    padding-left: 10px;
  }
`;
export default GlobalStyle;


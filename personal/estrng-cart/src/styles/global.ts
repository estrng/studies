import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: ${(props) => props.theme.colors.background};
  font-size: 14px;
  color: ${(props) => props.theme.colors.text};
  font-family: 'Fira Code', monospace;
}

body::-webkit-scrollbar {
  width: 3px;
  border-radius: 50px;
  /* display: none; */
}

body::-webkit-scrollbar-thumb {
  background-color: ${(props) => props.theme.colors.text};
  border-radius: 50px;
  size: 10px;
}
`;

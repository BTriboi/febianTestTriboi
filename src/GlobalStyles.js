import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#dadada",
  fontColor: "#000",
  button: "#292929",
  shadow: "10px 10px 10px rgb(0, 0, 0, 0.1)",
};
export const darkTheme = {
  body: "#292929",
  fontColor: "#fff",
  button: "#dadada",
  shadow: "10px 10px 10px rgb(200, 200, 200, 0.1)",
};

export const GlobalStyles = createGlobalStyle`

body {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.fontColor};
}

.input {
  &:hover {
    cursor: pointer;
    box-shadow: ${(props) => props.theme.shadow};
  }
}
.themeModeToggler {
    background-color: ${(props) => props.theme.button};
    &:hover {
    cursor: pointer;
    box-shadow: ${(props) => props.theme.shadow};
  }
}
`;

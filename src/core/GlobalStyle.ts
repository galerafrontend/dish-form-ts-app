import { createGlobalStyle, DefaultTheme } from "styled-components";
import { CustomTheme } from "./theme";

export const GlobalStyle = createGlobalStyle<{
  theme: DefaultTheme & CustomTheme;
}>`
  html {
    box-sizing: border-box;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
    font-family: 'Oswald', sans-serif;
    background: ${({ theme }) => theme.colors.albescentWhite};
  }
`;

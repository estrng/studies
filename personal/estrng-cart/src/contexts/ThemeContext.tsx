import { createContext } from "react";
import { ThemeProvider as StyledCompThemeProvider, DefaultTheme, ThemeProviderProps } from "styled-components";
import usePersistedState from "../hooks/usePersistedState";
import GlobalStyle from "../styles/global";
import dark from "../styles/themes/dark";
import light from "../styles/themes/light";

export const ToggleThemeContext = createContext<() => void>(() => { });

export function ThemeProvider({ children }: ThemeProviderProps<DefaultTheme>) {
  const [theme, setTheme] = usePersistedState<DefaultTheme>(
    "theme",
    light
  );

  const toggledTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ToggleThemeContext.Provider value={toggledTheme}>
      <StyledCompThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </StyledCompThemeProvider>
    </ToggleThemeContext.Provider>
  );
};

ThemeProvider.displayName = "ThemeProvider";

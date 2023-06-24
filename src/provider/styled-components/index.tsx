import theme from "@/assets/css/theme";
import StyledComponentsRegistry from "@/lib/registry";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../../assets/css/global";

export const StyledComponents = ({ children }: { children: ReactNode }) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        {children}
        <GlobalStyles {   } />
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
};

'use client';

import darkTheme from "@/theme/darkTheme";
import lightTheme from "@/theme/lightTheme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createContext, ReactNode, useContext, useMemo, useState } from "react";

type ThemeMode = "light" | "dark";

interface IThemeContext {
  mode: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<IThemeContext | undefined>(undefined);

export const useThemeMode = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error('useThemeMode must be used withing ThemeContextProvider');
    return context;
}

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<ThemeMode>("dark");

  const toggleTheme = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const theme = useMemo(() => (mode === "dark" ? darkTheme : lightTheme), [mode]);

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

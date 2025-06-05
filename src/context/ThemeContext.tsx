"use client";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { createContext, ReactNode, useContext, useLayoutEffect, useMemo, useState } from "react";
import { ThemeMode } from "@/lib/types";
import darkTheme from "@/theme/darkTheme";
import lightTheme from "@/theme/lightTheme";
import { loadTheme } from "@/tools/storage";

interface IThemeContext {
  mode: ThemeMode;
  toggleTheme: () => void;
  setTheme: (theme: ThemeMode) => void;
}

const ThemeContext = createContext<IThemeContext | undefined>(undefined);

export const useThemeMode = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useThemeMode must be used withing ThemeContextProvider");
  return context;
};

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<ThemeMode>("dark");

  const toggleTheme = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const setTheme = (theme: ThemeMode) => setMode(theme);

  const theme = useMemo(() => (mode === "dark" ? darkTheme : lightTheme), [mode]);

  useLayoutEffect(() => {
    const loadedTheme = loadTheme();
    if (loadedTheme) setMode(loadedTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme, setTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

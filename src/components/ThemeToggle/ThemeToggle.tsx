'use client';

import { Button } from "@mui/material";
import { WiDaySunny, WiMoonWaxingCrescent3 } from "react-icons/wi";
import { useEffect } from "react";

import { useThemeMode } from "@/context/ThemeContext";
import styles from './ThemeToggle.module.scss';

export default function ThemeToggle() {
  const { toggleTheme, mode } = useThemeMode();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', mode);
  }, [mode])

  return (
    <Button className={styles.theme_button} sx={{ width: "32px", height: "32px", borderRadius: "16px", minWidth: "32px", padding: 0 }} onClick={toggleTheme} variant="outlined">
      {mode === "dark" ? <WiDaySunny size={24}/> : <WiMoonWaxingCrescent3 size={24}/>}
    </Button>
  );
};

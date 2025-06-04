"use client";

import { Box } from "@mui/material";
import styles from "./Header.module.scss";
import { useThemeMode } from "@/context/ThemeContext";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import LogoDark from "@/assets/logo-dark-theme.svg";
import LogoLight from "@/assets/logo-light-theme.svg";
import { useRouter } from "next/navigation";

export default function Header() {
  const { mode } = useThemeMode();
  const router = useRouter();

  const handleLogoClick = () => router.push("/");

  return (
    <Box className={styles.header} component="header">
      {mode === "dark" ? <LogoDark className={styles.logo} onClick={handleLogoClick} /> : <LogoLight className={styles.logo} onClick={handleLogoClick} />}
      <ThemeToggle />
    </Box>
  );
}

"use client";

import { Box } from "@mui/material";
import styles from "./Header.module.scss";
import { useThemeMode } from "@/context/ThemeContext";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logoDark from "@/assets/logo-dark.png";
import logoLight from "@/assets/logo-light.png";

export default function Header() {
  const { mode } = useThemeMode();
  const router = useRouter();

  const handleLogoClick = () => router.push("/");

  return (
    <Box className={styles.header} component="header">
      <Image
        className={styles.logo}
        src={mode === "dark" ? logoDark : logoLight}
        width={42}
        height={42}
        onClick={handleLogoClick}
        alt="logo"
      />
      <h2 className={styles.name}>Quieasy</h2>
      <div className={styles.menu}>
        <ThemeToggle />
      </div>
    </Box>
  );
}

"use client";

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
    <header className={styles.header}>
      <div className={styles.wrapper}>
        {mode === "dark" ? (
          <LogoDark className={styles.logo} onClick={handleLogoClick} />
        ) : (
          <LogoLight className={styles.logo} onClick={handleLogoClick} />
        )}
      </div>
      <h2>Quieasy</h2>
      <div className={styles.wrapper}>
        <ThemeToggle />
      </div>
    </header>
  );
}

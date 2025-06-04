import { Box } from "@mui/material";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import styles from "./Header.module.scss";

export default function Header() {
    return (
        <Box className={styles.header} component="header">
            <ThemeToggle />
        </Box>
    )
}
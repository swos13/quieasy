import { Roboto } from "next/font/google";
import "./globals.scss";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

import { ThemeContextProvider } from "@/context/ThemeContext";
import Header from "@/components/Header/Header";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
        <AppRouterCacheProvider>
          <ThemeContextProvider>
            <Header />
            {children}
          </ThemeContextProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

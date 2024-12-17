import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import "./globals.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../utils/theme";
import Footer from "../components/Footer";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "DebtKaaval",
  description: "Streamline your debt management with DebtKaaval",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.variable} style={{ height: "100vh" }}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            {children}
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

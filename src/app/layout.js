import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import PageFooter from "./components/PageFooter";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-body",
    display: "swap",
    weight: ["400", "500"],
});

const jakarta = Plus_Jakarta_Sans({
    subsets: ["latin"],
    variable: "--font-heading",
    display: "swap",
    weight: ["500", "600", "700"],
});

export const metadata = {
    title: "Kyle Mardell Web Studio",
    description: "Custom websites for small businesses",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${jakarta.variable}`}>
                <NavBar />
                <main>{children}</main>
                <PageFooter />
            </body>
        </html>
    );
}

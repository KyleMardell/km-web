import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import "aos/dist/aos.css"; 
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
    metadataBase: new URL("https://kmweb.co.uk"),
    robots: {
        index: true,
        follow: true,
    },
    title: {
        default: "Kyle Mardell | Freelance Web Developer in Manchester",
        template: "%s | Kyle Mardell",
    },
    description:
        "I design and build custom websites for small and local businesses. Based in Manchester, I handle everything from setup and hosting to launch and support.",
    openGraph: {
        title: "Kyle Mardell | Freelance Web Developer in Manchester",
        description:
            "I design and build custom websites for small and local businesses. Based in Manchester, I handle everything from setup and hosting to launch and support.",
        url: "https://kmweb.co.uk",
        siteName: "Kyle Mardell",
        locale: "en_GB",
        type: "website",
    },
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

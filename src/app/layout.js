import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import "aos/dist/aos.css"; 
import NavBar from "./components/NavBar";
import PageFooter from "./components/PageFooter";
import { siteName, siteUrl } from "./lib/seo";

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
    metadataBase: new URL(siteUrl),
    robots: {
        index: true,
        follow: true,
    },
    title: {
        default: "Freelance Web Developer in Manchester | KM Web",
        template: "%s | KM Web",
    },
    description:
        "I design and build custom websites for small and local businesses. Based in Manchester, I handle everything from setup and hosting to launch and support.",
};

const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}#organization`,
    name: siteName,
    url: siteUrl,
    logo: new URL("images/kmweb-logo.webp", siteUrl).href,
    email: "kyle@kmweb.co.uk",
    telephone: "+447766082304",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${jakarta.variable}`}>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(organization).replace(/</g, "\\u003c") }}
                />
                <a className="skip-link" href="#main-content">Skip to content</a>
                <NavBar />
                <main id="main-content" tabIndex={-1}>{children}</main>
                <PageFooter />
            </body>
        </html>
    );
}

import { pageMetadata } from "../lib/seo";

export const metadata = pageMetadata({
    title: "Contact",
    description:
        "Discuss your small business website, the £39/month managed package or a larger project. Contact Kyle Mardell in Manchester by email, phone or the enquiry form.",
    path: "/contact/",
});

export default function ContactLayout({ children }) {
    return children;
}

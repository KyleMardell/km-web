export const siteUrl = "https://kmweb.co.uk/";
export const siteName = "KM Web";

export function pageMetadata({ title, description, path }) {
    const url = new URL(path, siteUrl).href;
    const fullTitle = `${title} | ${siteName}`;
    return {
        title: { absolute: fullTitle },
        description,
        alternates: { canonical: url },
        openGraph: {
            title: fullTitle,
            description,
            url,
            siteName,
            locale: "en_GB",
            type: "website",
        },
        twitter: {
            card: "summary",
            title: fullTitle,
            description,
        },
    };
}

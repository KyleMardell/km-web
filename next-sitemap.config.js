/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://kmweb.co.uk",
    outDir: "out",
    generateRobotsTxt: true,
    sitemapSize: 7000,
    changefreq: "monthly",
    priority: 0.7,
    exclude: ["/404", "/althairsalon", "/althairsalon/"],

    robotsTxtOptions: {
        policies: [
            {
                userAgent: "*",
                allow: "/",
            },
        ],
    },
};

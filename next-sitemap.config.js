/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://kmweb.co.uk",
    generateRobotsTxt: true,
    sitemapSize: 7000,
    changefreq: "monthly",
    priority: 0.7,
    exclude: ["/404"],

    robotsTxtOptions: {
        policies: [
            {
                userAgent: "*",
                allow: "/",
            },
        ],
    },
};

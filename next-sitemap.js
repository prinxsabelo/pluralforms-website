const siteUrl = "https://www.pluralforms.com";
module.exports = {
    siteUrl,
    generateRobotsTxt: true,
    robotsTxtOptions: {
        additionalSitemaps: [
            "https://www.pluralforms.com/sitemap.xml",
            "https://www.pluralforms.com/sitemap-0.xml"
        ]
    },

}
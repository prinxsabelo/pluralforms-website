const siteUrl = "https://www.pluralforms.com";
module.exports = {
    siteUrl,
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            { userAgent: "*", disallow: "/secret" },
            { userAgent: "*", allow: "/" },
        ]
    },
    outDir: "./out",
    exclude: ["/secret"]
}
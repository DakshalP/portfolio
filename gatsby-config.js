/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    /* Your site config here */
    siteMetadata: require("./site-meta-data.json"),
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `markdown-pages`,
                path: `${__dirname}/_data`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            classPrefix: "language-",
                            inlineCodeMarker: null,
                            aliases: {},
                            showLineNumbers: false,
                            noInlineHighlight: false,
                        },
                    },
                    {
                        resolve: "gatsby-remark-emojis",
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                // The property ID; the tracking code won't be generated without it. replace with yours
                trackingId: "",
                head: true,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Dakshal's Personal Website`,
                short_name: `Dakshal P`,
                start_url: `/`,
                background_color: `#fff`,
                theme_color: `#5393fe`,
                display: `standalone`,
                icon: "src/images/icon.png",
            },
        },
        `gatsby-plugin-sass`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-netlify-cms`,
            options: {
                enableIdentityWidget: true,
            },
        },
        "gatsby-plugin-dark-mode",
        // siteURL is a must for sitemap generation
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-offline`,
    ],
};

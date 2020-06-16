/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require('dotenv').config()

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-sass',
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.ts$|\.tsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'SiteData',
        fieldName: 'siteData',
        url: process.env.GRAPHQL_URL,
        headers: {
          Authorization: `Bearer ${process.env.GRAPHQL_AUTH_KEY}`,
        },
      },
    },
  ],
}

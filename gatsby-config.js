module.exports = {
  siteMetadata: {
    title: 'malloy.dev',
    author: 'Jackson Malloy',
    commentsRepository: 'PlayingWithMDX/malloy.dev-comments',
    copyright: '2020–2021',
    description: 'Portfolio of Full Stack Developer, Jackson Malloy',
    googleSiteVerificationCode: '',
    repository: 'https://github.com/jacksonmalloy/PlayingWithMDX',
    siteUrl: 'https://malloy.dev',
    titleTemplate: '%s | Portfolio | Jackson Malloy',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
              quality: 100,
            },
          },
        ],
        defaultLayouts: {
          default: require.resolve('./src/Layout.tsx'),
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jackson Malloy`,
        short_name: `Jacks`,
        start_url: `/`,
        background_color: `#fdfaf6`,
        theme_color: `#202020`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
    author: 'Jacks',
    menuLinks: [
      {
        name: 'home',
        link: '/',
        children: [],
      },
      {
        name: 'contact',
        link: '/contact',
        children: [],
      },
      {
        name: 'work',
        link: '/work',
        children: [],
      },
      {
        name: 'projects',
        link: '/projects',
        children: [],
      },
      {
        name: 'posts',
        link: '/posts',
        children: [],
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve('./src/Layout.tsx'),
        },
      },
    },
    {
      resolve: 'gatsby-source-nasa',
      options: {
        key: 'QUPw7DOFGJULIpTF1G9NSJPk2gMgbLZc5UIbTsET',
        images: [
          {
            type: 'apod',
            date: '2019-01-01',
          },
          {
            type: 'epic',
            date: '2019-01-01',
          },
        ],
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

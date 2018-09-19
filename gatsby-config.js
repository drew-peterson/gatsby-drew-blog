module.exports = {
  siteMetadata: {
    title: 'Drew Gatsby Testing',
    desc: 'a new blog', // restart server to get changes in graphql
  },
  pathPrefix: '/gatsby-drew-blog',
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // grab images
    'gatsby-plugin-offline',
    'gatsby-plugin-styled-components', // so it renders the component correctly
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`, // query filesystem such as images
      options: {
        name: `img`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`, // query filesystem such as images
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`, // nost sure if needed seems to work without
      options: {
        name: `img`,
        path: `${__dirname}/static/assets`,
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'gu6gno1iejvi',
        accessToken:
          '174449c6bde1af67515606bd96534542032af4c0d852a3261266b6944b698e26',
      },
    },
  ],
}

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
    desc: 'a new blog', // restart server to get changes in graphql
  },
  plugins: [
    'gatsby-plugin-react-helmet',
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
    'gatsby-plugin-offline',
    'gatsby-plugin-styled-components', // so it renders the component correctly
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
    'gatsby-transformer-remark',
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // grab images
  ],
}

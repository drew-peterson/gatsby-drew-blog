module.exports = {
  siteMetadata: {
    title: 'Drew Gatsby Testing',
    desc: 'a new blog', // restart server to get changes in graphql
  },
  pathPrefix: '/gatsby-drew-blog',
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
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        excerpt_separator: `<!-- end -->`, // not working.... but basically you can customize what is excerpt by adding <!-- end --> could be any string
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // grab images
    'gatsby-plugin-netlify-cms',
  ],
}

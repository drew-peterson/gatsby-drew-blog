require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const { GRAPH_CMS, CONTENTFUL_ID, CONTENTFUL_TOKEN, GITHUB_TOKEN } = process.env

module.exports = {
  siteMetadata: {
    title: 'Drew Gatsby Contentful',
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
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: CONTENTFUL_ID,
        accessToken: CONTENTFUL_TOKEN,
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        // This type will contain remote schema Query type
        typeName: 'DREW',
        // This is field under which it's accessible
        fieldName: 'drew',
        // Url to query from
        url: GRAPH_CMS,
        // refetch interval in seconds
        // refetchInterval: 60,
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'GitHub',
        fieldName: 'github',
        // Url to query from
        url: 'https://api.github.com/graphql',
        // HTTP headers
        headers: {
          Authorization: `bearer ${GITHUB_TOKEN}`,
        },
        // Additional options to pass to node-fetch
        fetchOptions: {},
        // refetchInterval: 60,
      },
    },
  ],
}

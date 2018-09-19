const path = require('path')
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  //   query the field we created
  const { data } = await graphql(`
    {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  data.allContentfulBlogPost.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: path.resolve('./src/posts/PostPage.js'),
      context: {
        slug: node.slug,
      },
    })
  })
}

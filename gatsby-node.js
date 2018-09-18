const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
// called when buildprocess is called
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({
      node,
      getNode,
      basePath: 'posts', // md files are in posts
    })

    createNodeField({
      node, // the markdown file from markdownRemkar
      name: 'slug',
      value: `/posts${slug}`, // slugn = /post
    })
  }
}

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions
//   return new Promise((resolve, reject) => {
//     graphql(`
//       {
//         allMarkdownRemark {
//           edges {
//             node {
//               fields {
//                 slug
//               }
//             }
//           }
//         }
//       }
//     `).then(result => {
//       result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//         createPage({
//           path: node.fields.slug,
//           component: path.resolve('./src/components/Posts/PostPage.js'),
//           context: {
//             slug: node.fields.slug,
//           },
//         })
//       })
//       resolve()
//     })
//   })
// }

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  //   query the field we created
  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    // create a new gatsby page
    createPage({
      path: node.fields.slug, // /posts/post/ -- post is the name of md file
      component: path.resolve('./src/components/Posts/PostPage.js'),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}

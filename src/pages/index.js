import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import PostListing from '../components/Posts/PostListing'

const IndexPage = ({ data, location }) => {
  const {
    md: { edges },
  } = data
  return (
    <Layout location={location}>
      <h2>Posts</h2>
      {edges.map(({ node }) => (
        <PostListing key={node.id} post={node} />
      ))}
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query SiteMeta {
    site {
      siteMetadata {
        title
        desc
      }
    }
    md: allContentfulBlogPost {
      edges {
        node {
          id
          title
          slug
          createdAt(formatString: "MMMM DD YYYY")
          body {
            childMarkdownRemark {
              excerpt
            }
          }
        }
      }
    }
  }
`

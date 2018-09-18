import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import PostListing from '../components/Posts/PostListing'

const IndexPage = ({ data }) => {
  const {
    md: { edges },
  } = data
  const { title, desc } = data.site.siteMetadata
  return (
    <Layout>
      <p>{title}</p>
      <p>{desc}</p>

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
    md: allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD YYYY")
          }
          html
        }
      }
    }
  }
`

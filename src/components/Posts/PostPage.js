import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
class PostPage extends Component {
  render() {
    const {
      data: {
        post: { frontmatter, html },
      },
      location,
    } = this.props
    const { title, date } = frontmatter
    return (
      <Layout location={location}>
        <span>{date}</span>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Layout>
    )
  }
}

// StaticQuery does not accept variables
export const query = graphql`
  query BlogPostQuery($slug: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD YYYY")
      }
    }
  }
`

export default PostPage

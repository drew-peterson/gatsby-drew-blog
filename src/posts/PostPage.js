import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
class PostPage extends Component {
  render() {
    const {
      data: {
        post: { createdAt, title, body, image },
      },
      location,
    } = this.props

    const { html } = body.childMarkdownRemark
    return (
      <Layout location={location}>
        <span>{createdAt}</span>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />

        {image && (
          <div>
            <h3>from the image collection</h3>
            {/* assets need to have no spaces in fiel */}
            <img src={image} alt="" />
          </div>
        )}
      </Layout>
    )
  }
}

// StaticQuery does not accept variables
export const query = graphql`
  query BlogPostQuery($slug: String!) {
    post: contentfulBlogPost(slug: { eq: $slug }) {
      id
      slug
      title
      createdAt(formatString: "MMMM DD, YYYY")
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

export default PostPage

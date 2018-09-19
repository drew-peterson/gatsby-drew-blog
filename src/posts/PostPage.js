import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
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
        <Img fluid={image.fluid} />
        <div dangerouslySetInnerHTML={{ __html: html }} />
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
      image {
        fluid(maxWidth: 500) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

export default PostPage

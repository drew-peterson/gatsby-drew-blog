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
    const { title, date, image } = frontmatter
    return (
      <Layout location={location}>
        <span>{date}</span>
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
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD YYYY")
        image
      }
    }
  }
`

export default PostPage

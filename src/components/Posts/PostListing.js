import React from 'react'
import Link from 'gatsby-link'
const PostListing = ({ post }) => (
  <article>
    <h3>{post.frontmatter.title}</h3>
  </article>
)

export default PostListing

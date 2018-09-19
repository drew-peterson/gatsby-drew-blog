import React from 'react'
import Link from 'gatsby-link'
const PostListing = ({ post }) => (
  <article>
    <span>{post.createdAt}</span>
    <h3>
      <Link to={post.slug}>{post.title}</Link>
    </h3>
    <p>{post.body.childMarkdownRemark.excerpt}</p>
  </article>
)

export default PostListing

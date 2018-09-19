import { graphql } from 'gatsby'
export const IMAGE = graphql`
  query HeaderImage {
    background: imageSharp(original: { src: { regex: "/logo/" } }) {
      fluid(maxWidth: 1240) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const HEADER = graphql`
  query HeaderQuery {
    contentfulHeader(contentful_id: { eq: "2cKN9qRqWwq2CQKaEass2i" }) {
      title
      hero {
        fluid(maxWidth: 1240) {
          ...GatsbyContentfulFluid
        }
      }
      profilePicture {
        fluid(maxWidth: 100) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

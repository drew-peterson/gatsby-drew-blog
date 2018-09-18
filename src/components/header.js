import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import logo from '../images/logo.jpg'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const HeaderWrapper = styled.div`
  background: green;
  margin-bottom: 1.45rem;
  overflow: hidden;
  position: relative;
  height: 70vh;

  h1 {
    img {
      height: 80px;
      margin: 0;
    }
  }

  nav {
  }
`

const IMAGE = graphql`
  query HeaderImage {
    background: imageSharp(original: { src: { regex: "/logo/" } }) {
      fluid(maxWidth: 1240) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  position: relative;
  z-index: 2;
`

// doesnt work with Img but in thery it could work
// const Billboard = styled(Img)`
//   position: absolute;
//   left: 0;
//   top: 0;
//   width: 100%;
//   height: 100%;
// `

const Header = data => {
  const { siteTitle } = data
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <h1 style={{ margin: 0 }}>
          <img src={logo} alt="my face" />
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
            {siteTitle}
          </Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/page-2">page 2</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </HeaderContainer>
      <StaticQuery
        query={IMAGE}
        render={({ background: { fluid } }) => (
          <Img style={styles.image} fluid={fluid} />
        )}
      />
    </HeaderWrapper>
  )
}

const styles = {
  image: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
  },
}

export default Header

import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
// import logo from '../images/logo.jpg'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Spring, Trail, config } from 'react-spring'

class Header extends Component {
  state = { in: false }

  constructor(props) {
    super(props)
    this.nav = [
      { to: '/', title: 'Home' },
      { to: '/about', title: 'About' },
      { to: '/lambda', title: 'Lambda' },
      { to: '/fetch', title: 'Fetch' },
    ]
  }

  componentDidMount() {
    this.setState({ in: true })
    // const { location } = this.props

    // does not work in safari
    // const animate = this.wrapper.animate(
    //   [{ height: '70vh' }, { height: '20vh' }],
    //   {
    //     duration: 300,
    //     fill: 'forwards',
    //     easing: 'cubic-bezier(0.86,0,0.07,1)',
    //     iterations: 1,
    //   }
    // )
    // animate.pause()

    // if (location.pathname === '/') {
    //   animate.reverse()
    // } else {
    //   animate.play()
    // }
  }

  render() {
    console.log('HEADER', this.props)
    return (
      <StaticQuery
        query={HEADER}
        render={({ header: { title, hero, profilePicture } }) => {
          return (
            <RenderHeader
              nav={this.nav}
              title={title}
              hero={hero}
              profilePicture={profilePicture}
              state={this.state}
              location={this.props.location}
            />
          )
        }}
      />
    )
  }
}

const RenderHeader = ({
  title,
  location,
  profilePicture,
  hero,
  state,
  nav,
}) => (
  <HeaderWrapper
    isHome={location.pathname === '/'}
    className={state}
    // ref={wrapper => (this.wrapper = ReactDOM.findDOMNode(wrapper))} // get dom element
  >
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Spring
          delay={1000}
          from={{ transform: 'translateX(-20px)', opacity: 0 }}
          to={{ opacity: 1, transform: 'translateX(0)' }}
        >
          {styles => (
            <Img
              style={styles}
              className="profilePicture"
              fluid={profilePicture.fluid}
              alt="profile picture"
            />
          )}
        </Spring>

        <Spring
          config={config.molasses}
          delay={2000}
          from={{ transform: 'translateY(-20px)', opacity: 0 }}
          to={{ opacity: 1, transform: 'translateY(0)' }}
        >
          {styles => {
            return (
              <Link
                to="/"
                style={{ color: 'white', textDecoration: 'none', ...styles }}
              >
                {title}
              </Link>
            )
          }}
        </Spring>
      </h1>
      <MainNav>
        <ul>
          <Trail
            keys={nav.map(item => item.to)}
            delay={3000}
            from={{ transform: 'translateY(-20px)', opacity: 0 }}
            to={{ opacity: 1, transform: 'translateY(0)' }}
          >
            {nav.map(item => styles => (
              <li style={styles}>
                <Link to={item.to}>{item.title}</Link>
              </li>
            ))}
          </Trail>
        </ul>
      </MainNav>
    </HeaderContainer>
    <Img style={styles.image} fluid={hero.fluid} />
  </HeaderWrapper>
)

const styles = {
  image: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    opacity: 0.3,
  },
}

const HeaderWrapper = styled.div`
  margin-bottom: 1.45rem;
  overflow: hidden;
  position: relative;
  background: blue;
  height: 50vh;
  h1 {
    display: flex;
    align-items: center;
  }

  nav {
  }
`

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .profilePicture {
    height: 70px;
    width: 70px;
    margin: 0;
    border-radius: 50%;
    margin-right: 10px;
  }
`

const MainNav = styled.nav`
  ul {
    list-style: none;
    display: flex;
    margin: 0;
    li {
      margin: 0;
      margin-left: 10px;
      a {
        text-decoration: none;
        color: #fff;

        &:hover {
          border-bottom: 3px solid blue;
        }
      }
    }
  }
`

const HEADER = graphql`
  query HeaderQuery {
    header: contentfulHeader(contentful_id: { eq: "2cKN9qRqWwq2CQKaEass2i" }) {
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

export default Header

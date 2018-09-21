import React, { Component } from 'react'
import Layout from '../components/layout'
import { StaticQuery, graphql } from 'gatsby'
// import axios from 'axios'

const DREW = graphql`
  query {
    drew {
      drews {
        name
      }
    }
  }
`

export default class Fetch extends Component {
  state = { user: '', loading: true }

  async componentDidMount() {
    // const url =
    //   'https://api-uswest.graphcms.com/v1/cjlbn9gc80icg01fz8j4asr8p/master'
    // const {
    //   data: { data },
    // } = await axios({
    //   url,
    //   method: 'post',
    //   data: {
    //     query: `
    //       query {
    //         headers {
    //           title
    //         }
    //     }
    //   `,
    //   },
    // })
    // this.setState({ user: data.headers[0], loading: false })
  }

  render() {
    // const { loading, user } = this.state
    return (
      <Layout location={this.props.location}>
        {/* <h1>Axios</h1> */}
        {/* {loading && <p>loading.....</p>}
        {user && <p>{user.title}</p>} */}

        <h2>Static Query</h2>
        <StaticQuery query={DREW}>
          {({ drew }) => {
            console.log('drew', drew)

            return <div>{drew.drews[0].name}</div>
          }}
        </StaticQuery>
      </Layout>
    )
  }
}

const GITHUB = graphql`
  query {
    github {
      repositoryOwner(login: "weeznog") {
        repositories(
          first: 40
          orderBy: { field: CREATED_AT, direction: DESC }
        ) {
          edges {
            node {
              ... on GitHub_Repository {
                id
                name
                description
                updatedAt
                repositoryTopics(first: 10) {
                  edges {
                    node {
                      topic {
                        id
                        name
                      }
                    }
                  }
                }
                languages(first: 10) {
                  edges {
                    node {
                      name
                      color
                    }
                  }
                }
                url
                homepageUrl
                defaultBranchRef {
                  target {
                    commitUrl
                    ... on GitHub_Commit {
                      history(first: 3) {
                        edges {
                          node {
                            ... on GitHub_Commit {
                              message
                              committedDate
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

import React, { Component } from 'react'
import Layout from '../components/layout'
import axios from 'axios'

export default class Fetch extends Component {
  state = { user: '', loading: true }

  async componentDidMount() {
    const url =
      'https://api-uswest.graphcms.com/v1/cjlbn9gc80icg01fz8j4asr8p/master'
    const {
      data: { data },
    } = await axios({
      url,
      method: 'post',
      data: {
        query: `
          query {
            headers {
              title
            }
        }
      `,
      },
    })
    this.setState({ user: data.headers[0], loading: false })
  }

  render() {
    const { loading, user } = this.state
    return (
      <Layout location={this.props.location}>
        <h1>Fetch</h1>
        {loading && <p>loading.....</p>}
        {user && <p>{user.title}</p>}
      </Layout>
    )
  }
}

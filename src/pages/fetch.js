import React, { Component } from 'react'
import Layout from '../components/layout'
import axios from 'axios'

export default class Fetch extends Component {
  state = { user: '', loading: true }

  async componentDidMount() {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/todos/1'
    )

    this.setState({ user: data, loading: false })
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

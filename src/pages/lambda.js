import React, { Component } from 'react'
import Layout from '../components/layout'
import axios from 'axios'
export default class Lambda extends Component {
  state = {
    url: '/.netlify/functions/hello',
  }
  click = async () => {
    const res = await axios.get(this.state.url)
    console.log('res', res)
  }

  render() {
    return (
      <Layout location={this.props.location}>
        <h1>Lambda</h1>
        <input
          style={{ width: 400 }}
          value={this.state.url}
          type="text"
          onChange={e => this.setState({ url: e.target.value })}
        />
        <button onClick={this.click}>lambda</button>
      </Layout>
    )
  }
}

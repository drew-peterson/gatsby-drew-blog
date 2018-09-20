import React, { Component } from 'react'
import Layout from '../components/layout'
import axios from 'axios'
export default class Lambda extends Component {
  state = {
    url: '/.netlify/functions/hello',
    show: false,
  }
  click = async () => {
    await axios.get(this.state.url)
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
        <button onClick={() => this.setState({ show: !this.state.show })}>
          toggle
        </button>

        <p>whats the message?</p>
        {this.state.show && <p>Message here that is secret after click</p>}
      </Layout>
    )
  }
}

import React, { Component } from 'react'
import Layout from '../components/layout'
import axios from 'axios'
import Waypoint from 'react-waypoint'
import { Spring } from 'react-spring'
export default class Lambda extends Component {
  state = {
    url: '/.netlify/functions/hello',
    show: false,
    showMessage: false,
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
        <button onClick={() => axios.get(this.state.url)}>lambda</button>
        <button onClick={() => this.setState({ show: !this.state.show })}>
          toggle - {this.state.test}
        </button>
        <div style={{ marginTop: '50vh' }} />
        <Waypoint
          onEnter={() =>
            this.setState({
              showMessage: true,
            })
          }
          bottomOffset={300}
        />
        {this.state.showMessage && (
          <Spring
            from={
              { opacity: 0, transform: 'translateY(30px)' } // optional
            }
            to={{ opacity: 1, transform: 'translateY(0)' }}
          >
            {styles => <h1 style={styles}>Scrolled to + offset</h1>}
          </Spring>
        )}

        {this.state.show && <p>Message here that is secret after click</p>}
        <p style={{ marginTop: '80vh' }}>2nd message</p>
      </Layout>
    )
  }
}

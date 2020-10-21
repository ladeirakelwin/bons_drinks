import React, { Component } from 'react'

export default class List extends Component {

  render() {
    return ( <li className={this.props.style}>{this.props.children}</li> )
  }
}

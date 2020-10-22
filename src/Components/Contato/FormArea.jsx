import React, { Component } from 'react'

export default class FormArea extends Component {
  render() {
    return (
      <>
        <label className={this.props.cLabel}>{this.props.text}</label>
        <textarea className={this.props.cArea} name="mensagem" cols={this.props.cols} rows="7"></textarea>
      </>
    )
  }
}
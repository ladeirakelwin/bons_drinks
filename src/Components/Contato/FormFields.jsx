import React, { Component } from 'react'

export default class FormFields extends Component {
  render() {
    return (
      <>
        <label className={this.props.cLabel}>{this.props.text}</label>
        <input className={this.props.cInput} type={this.props.input} name={this.props.name} />
      </>
    )
  }
}


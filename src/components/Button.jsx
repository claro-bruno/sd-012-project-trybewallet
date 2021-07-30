import React, { Component } from 'react';
import './css/Button.css';

export default class Button extends Component {
  render() {
    return <input type="button" id="disabled" { ...this.props } />;
  }
}

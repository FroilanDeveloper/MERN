import React, { Component } from 'react';
import Apps from './Apps.module.css';

export default class Main extends Component {
  render() {
    return (
      <div class={Apps.Main}>{this.props.children}</div>
    )
  }
}

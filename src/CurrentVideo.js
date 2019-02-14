import React, { Component } from 'react';
import ReactPlayer from 'react-player';

export default class CurrentVideo extends Component {
  render() {
    return (
        <ReactPlayer controls={true} url={this.props.selectedVideo} playing >Loading...</ReactPlayer>
    )
  }
};
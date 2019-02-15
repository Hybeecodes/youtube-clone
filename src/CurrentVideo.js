import React, { Component } from 'react';
import ReactPlayer from 'react-player';

export default class CurrentVideo extends Component {
  render() {
    const no_vid = <p>Please Select a Video</p>;
    const video = this.props.selectedVideo;
    const baseURL = (!video)? '': `https://www.youtube.com/watch?v=${video.id.videoId}`;
    const selected = (!video)? no_vid: <ReactPlayer controls={true} url={baseURL} playing />

    return (
        // 
        <div>
          { selected }
        </div>
    )
  }
};
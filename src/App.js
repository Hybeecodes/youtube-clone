import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Searchbar from './Searchbar';
import youtube from './apis/youtube';
import ReactPlayer from 'react-player';
import VideoList from './VideoList';
import VideoItem from './VideoItem';
import CurrentVideo from './CurrentVideo';

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  }

  handleSelectedVideo = (video) => {
    this.setState({
      selectedVideo: video
    })
  }

  handleSubmit = async(query) => {
    const response = await youtube.get('/search',{
      params:{
        q: query
      }
    });
    console.log(response)
    this.setState({
      videos: response.data.items
    })
  };

  render() {
    return (
      <div className="App container">
      <br />
        <Searchbar handleFormSubmit= {this.handleSubmit} />
        <CurrentVideo selectedVideo={this.state.selectedVideo} />
        <div>
          <VideoList handleSelectedVideo={this.handleSelectedVideo} videos={this.state.videos} />
          {/* <VideoItem /> */}
        </div>
      </div>
    );
  }
}

export default App;

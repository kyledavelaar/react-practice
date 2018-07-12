import React, { Component } from 'react';
import axios from 'axios';
import './progress-bar.css';


export default class ProgressBar extends Component {
  state = {
    progress: 0,
    images: [],
  }

  render() {
    const { progress } = this.state;
    return (
      <div className="link-container">
        <div className="progress-container">
          <div className="progress" style={{width: `${progress}%`}}></div>
        </div>
        <div style={{textAlign: 'center'}}>
          <p>{this.state.progress}</p>
          <p>Loading your super awesome experience...</p>
        </div>
      </div>
    )
  }

  config = {
    onDownloadProgress: progressEvent => {
      const total = progressEvent.total === 0 ? 216981 : progressEvent.total;

      // const totalLength = progressEvent.lengthComputable ? progressEvent.total : progressEvent.target.getResponseHeader('content-length') || progressEvent.target.getResponseHeader('x-decompressed-content-length');
      
      // console.log('totalLength', progressEvent.target.getResponseHeader('X-Content-Length'))

      let percentCompleted = Math.floor((progressEvent.loaded * 100) / total);
      // console.log('loaded', progressEvent.loaded);
      // console.log('total', progressEvent);
      console.log('%', percentCompleted);

      this.setState({
        progress: percentCompleted
      })
    }
  }

  componentDidMount() {
    axios.get('https://unsplash.it/list', this.config)
      .then((res) => {
        // console.log('res', res.data)
        this.setState({
          images: res.data
        })
      })
      .catch((err) => {
        console.log('err', err)
      })
  }
}
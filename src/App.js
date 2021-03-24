import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home'
import Player from './components/player'
export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      urlVideo: ''
    }
  }
  setUrlVideo = (url) => { 
    this.setState({ urlVideo: url }) 
  }
  getUrlVideo = () => this.state.urlVideo
  render() {
    return (

      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={props => <Home setVideo={this.setUrlVideo} />} ></Route>
          <Route exact path="/player-video/:title" render={props => <Player getVideo={this.getUrlVideo} />}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
import React from 'react';
import { BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './components/home'
import Player from './components/player'
export default class App extends React.Component{

render(){
  return (  
    
     <BrowserRouter>
      <Switch>
          <Route exact path="/" render={props => <Home></Home>} ></Route>
          <Route exact path="/player-video" render={props=><Player></Player>}></Route>
      </Switch>
     </BrowserRouter>
       );
}
}
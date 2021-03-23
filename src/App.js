import React from 'react';
import { BrowserRouter,Switch,Route} from 'react-router-dom';
import NavBarHome from './components/navbarHome';

export default class App extends React.Component{
  constructor(props){
    super(props)
  } 
render(){
  return (  
    
     <BrowserRouter>
      <Switch>
          <Route exact path="/" render={props => <NavBarHome></NavBarHome> } ></Route>
      </Switch>
       </BrowserRouter>
       );
}
}
import React from 'react';
import { withRouter } from 'react-router'
import VideoPlayer from './videoPlayer'
import NavBarNavigate from './navbarNavigate'
class Player extends React.Component{
 render(){
     return <div>
         <NavBarNavigate></NavBarNavigate>
         <VideoPlayer></VideoPlayer>
     </div>
 }
}
export default withRouter(Player)

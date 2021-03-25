import React from 'react';
import { withRouter } from 'react-router'
import VideoPlayer from './videoPlayer'
import NavBarNavigate from './navbarNavigate'
class Player extends React.Component {

    render() {
        return <div>
            <NavBarNavigate></NavBarNavigate>
            <h2 style={{ textAlign: 'center',color:'white', margin:'30px' }}>{this.props.match.params.title}</h2>
            <VideoPlayer getUrlVideo={this.props.getVideo}></VideoPlayer>
        </div>
    }
}
export default withRouter(Player)

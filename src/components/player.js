import React from 'react';
import { withRouter } from 'react-router'
import VideoPlayer from './videoPlayer'
import NavBarNavigate from './navbarNavigate'
class Player extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            getVideo: props.getVideo
        }
    }
    render() {
        return <div>
            <NavBarNavigate></NavBarNavigate>
            <VideoPlayer getUrlVideo={this.state.getVideo}></VideoPlayer>
        </div>
    }
}
export default withRouter(Player)

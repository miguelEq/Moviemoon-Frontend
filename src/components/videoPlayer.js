import React from 'react';
import { withRouter } from 'react-router'
import ReactPlayer from 'react-player'
import '../styles/player-wrapper.css'
class VideoPlayer extends React.Component{
    render () {
        return (
          <div className='player-wrapper'>
            <ReactPlayer
              className='react-player'
              url='https://www.youtube.com/watch?v=eOrNdBpGMv8'
              width='100%'
              height='100%'
              controls={true}
              playing={false}
            />
          </div>
        )
      }
   
}
export default withRouter(VideoPlayer)

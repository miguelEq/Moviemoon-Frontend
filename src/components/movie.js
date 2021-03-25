import React from 'react';
import  '../styles/movie.css'
import {Link} from 'react-router-dom'

export default class Movie extends React.Component{
    setUrlVideo=()=>{this.props.setVideo(this.props.urlTrailer)}
    render(){
        const path="/player-video/" + this.props.title
        return (<Link to={path} onClick={this.setUrlVideo}>
            <img 
            className="movie" 
            src={this.props.urlImg}></img>
            </Link>);
    }
}
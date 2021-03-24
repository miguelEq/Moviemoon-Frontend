import React from 'react';
import  '../styles/movie.css'
import {Link} from 'react-router-dom'

export default class Movie extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            title: props.title,
            urlImg:props.urlImg,
            urlTrailer:props.urlTrailer,
            setVideo:props.setVideo
        }
    }
    setUrlVideo=()=>{this.state.setVideo(this.state.urlTrailer)}
    render(){
        const path="/player-video/" + this.state.title
        return (<Link to={path} onClick={this.setUrlVideo}>
            <img 
            className="movie" 
            src={this.state.urlImg}></img>
            </Link>);
    }
}
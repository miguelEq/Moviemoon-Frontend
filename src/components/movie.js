import React from 'react';
import  '../styles/movie.css'
import {Link} from 'react-router-dom'

export default class Movie extends React.Component{

    render(){
        return (<Link to="/player-video" >
            <img 
            className="movie" 
            src="https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/5/54/Avengers_Age_Of_Ultron_Poster.png/revision/latest/scale-to-width-down/1000?cb=20191029195118&path-prefix=es"></img>
            </Link>);
    }
}
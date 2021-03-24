import React from 'react';
import { withRouter } from 'react-router'
import '../styles/container-movies.css'
import Movie from './movie'
import api from '../api/api'
class MoviesContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movies:props.movies,
            setVideo:props.setVideo 
        }
    }

    render() {
        return (
            <div className="container-movies">
                {            
                this.state.movies.map((mv) =>
                <Movie
                 key={mv.id}
                 title={mv.title}
                 urlImg={mv.image}
                 urlTrailer={mv.trailer}
                 setVideo={this.state.setVideo}
                 />
                )
                }
            </div>)
    }
}

export default withRouter(MoviesContainer)
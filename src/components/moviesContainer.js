import React from 'react';
import { withRouter } from 'react-router'
import '../styles/container-movies.css'
import Movie from './movie'
class MoviesContainer extends React.Component {
    render() {
        const movies=[1,2,3,4,5,6,7,8,9].map(e=><Movie></Movie>)
        return (
        <div className="container-movies">
            {movies}
        </div>)
    }
}

export default withRouter(MoviesContainer)
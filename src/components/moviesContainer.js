import React from 'react';
import { withRouter } from 'react-router'
import '../styles/container-movies.css'
import Movie from './movie'
class MoviesContainer extends React.Component {

    render() {
        return (
            <div className="container-movies">
                {            
                this.props.movies.map((mv) =>
                <Movie
                 key={mv.id}
                 title={mv.title}
                 urlImg={mv.image}
                 urlTrailer={mv.trailer}
                 setVideo={this.props.setVideo}
                 />
                )
                }
            </div>)
    }
}

export default withRouter(MoviesContainer)
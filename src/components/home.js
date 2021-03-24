import React from 'react';
import { withRouter } from 'react-router'
import NavbarHome from './navbarHome'
import MovieCarousel from './movieCarousel'
import MoviesContainer from './moviesContainer'
import api from '../api/api'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            setVideo: props.setVideo,
            movies: [],
            errorMessage: ''
        }
    }
    componentDidMount() {
        api.getMovies()
            .then(movies => {
                this.setState({
                    movies: movies // recordemos que equivale a tareas: tareas,
                })
            })
            .catch(error => this.setState({ errorMessage: error }))
    }
    render() {
      
        return this.state.movies.length > 2 ?
        <div>
        <NavbarHome></NavbarHome>
        <MovieCarousel setVideo={this.state.setVideo} movies={this.state.movies}></MovieCarousel>
        <MoviesContainer setVideo={this.state.setVideo} movies={this.state.movies}></MoviesContainer>
        </div>:
            <NavbarHome></NavbarHome>
        
    }
}
export default withRouter(Home)
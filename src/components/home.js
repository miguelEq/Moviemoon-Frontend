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
            movies: [],
            errorMessage: '',
            moviesSearched: []
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
    setSearchMovies = (lista) => {
        console.log('--list search--')
        console.log(lista)
        this.setState({
            moviesSearched: lista
        })
    }
    render() {

        return this.state.movies.length > 2 ?
            <div>
                <NavbarHome setSearchMovies={this.setSearchMovies}></NavbarHome>
                <div style={{margin:'30px'}}></div>
                <MovieCarousel setVideo={this.props.setVideo} movies={this.state.movies}></MovieCarousel>
                {this.state.moviesSearched.length === 0 ?
                    <MoviesContainer setVideo={this.props.setVideo} movies={this.state.movies} />
                    : <MoviesContainer setVideo={this.props.setVideo} movies={this.state.moviesSearched} />
                }
            </div> :
            <NavbarHome></NavbarHome>

    }
}
export default withRouter(Home)
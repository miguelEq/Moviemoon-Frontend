import React from 'react';
import { withRouter } from 'react-router'
import NavbarHome from './navbarHome'
import MovieCarousel from './movieCarousel'
import MoviesContainer from './moviesContainer'
class Home extends React.Component {
    render(){
        return (<div>
            <NavbarHome></NavbarHome>
            <MovieCarousel></MovieCarousel>
            <MoviesContainer></MoviesContainer>
        </div>)
    }
}    
export default withRouter(Home)
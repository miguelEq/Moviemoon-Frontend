import React from 'react';
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'
import '../styles/carousel.css'
class MovieCarousel extends React.Component {
    setUrlVideo = (movie) => { this.props.setVideo(movie.trailer) }
    render() {
        return <Carousel  >
            <Carousel.Item >
                <img
                    className="d-block w-100 carousel"
                    src={this.props.movies[0].image}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <Link to={"/player-video/"+this.props.movies[0].title } style={{ color: 'white' }} onClick={() => this.setUrlVideo(this.props.movies[0])}><h1>{this.props.movies[0].title}</h1></Link>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item >
                <img
                    className="d-block w-100 carousel"
                    src={this.props.movies[1].image}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <Link to={"/player-video/"+this.props.movies[1].title } style={{ color: 'white' }} onClick={() => this.setUrlVideo(this.props.movies[1])}><h1>{this.props.movies[1].title}</h1></Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <img
                    className="d-block w-100 carousel"
                    src={this.props.movies[2].image}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <Link to={"/player-video/"+this.props.movies[2].title } style={{ color: 'white' }} onClick={() => this.setUrlVideo(this.props.movies[2])}><h1>{this.props.movies[2].title}</h1></Link>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    }
}

export default withRouter(MovieCarousel)
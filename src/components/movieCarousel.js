import React from 'react';
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'
import '../styles/carousel.css'
class MovieCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        }
    }
    render() {
        return <Carousel  >
            <Carousel.Item >
                <img     
                    className="d-block w-100 carousel"
                    src="https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/5/54/Avengers_Age_Of_Ultron_Poster.png/revision/latest/scale-to-width-down/1000?cb=20191029195118&path-prefix=es"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item >
                <img
                    className="d-block w-100 carousel"
                    src="https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/5/54/Avengers_Age_Of_Ultron_Poster.png/revision/latest/scale-to-width-down/1000?cb=20191029195118&path-prefix=es"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item >
                <img
                    className="d-block w-100 carousel"
                    src="https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/5/54/Avengers_Age_Of_Ultron_Poster.png/revision/latest/scale-to-width-down/1000?cb=20191029195118&path-prefix=es"
                    alt="Third slide"
                />

            </Carousel.Item>
        </Carousel>
    }
}

export default withRouter(MovieCarousel)
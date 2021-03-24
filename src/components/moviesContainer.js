import React from 'react';
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

class MoviesContainer extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            movies:[]
        }
    }
    render(){return <div className="elementos">soy un container</div>}    
}

export default withRouter(MoviesContainer)
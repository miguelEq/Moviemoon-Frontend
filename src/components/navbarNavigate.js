import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import pikachu from '../images/pikachu.jpg'
class NavBarNavigate extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Navbar collapseOnSelect  bg="dark" variant="dark">
                <Nav className="container-fluid">
                <img
                    src={pikachu}
                    width="80"
                    height="70"
                    className="d-inline-block align-top"
                    alt="Pikachu Moviemoon logo"
                />
                <Navbar.Brand><strong>Moviemoon</strong></Navbar.Brand>
                <Nav.Item className="ml-auto">
                <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
                </Nav.Item>
                </Nav>
            </Navbar>)
    }
}
export default withRouter(NavBarNavigate)
import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { withRouter } from 'react-router';
import pikachu from '../images/pikachu.jpg'
class NavBarHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "",
            resultSearch: []
        }
    }
    setInput = (event) => { }

    executeSearch = () => {
    }
    render() {
        return (
            <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
                <img
                    src={pikachu}
                    width="80"
                    height="60"
                    className="d-inline-block align-top"
                    alt="Pikachu Moviemoon logo"
                />
                <Navbar.Brand > <strong>Moviemoon</strong></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Form inline >
                            <Form.Control type="text" placeholder="Search" className="mr-sm-3" size="md" />
                            <Button variant="outline-primary">Search</Button>
                        </Form>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>)
    }
}
export default withRouter(NavBarHome)
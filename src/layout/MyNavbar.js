import React from 'react'
import { Badge, Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const MyNavbar = () => {

    return (
        <div>
            <Navbar bg="dark" variant='dark' expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Foodies</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link>
                                <Link to="/">Home</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/cart">My Cart <Badge>0</Badge> </Link>

                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/orders">My Orders</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/profile">My Profile</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/register">Register</Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default MyNavbar
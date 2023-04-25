import React from 'react'
import { Badge, Container, Nav, Navbar } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const MyNavbar = () => {

    const { ItemCount } = useSelector((state) => state.cart)

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
                                <Link to="/cart">My Cart <Badge className='m-2'>{ItemCount}</Badge> </Link>

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
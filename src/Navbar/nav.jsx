import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import './nav.css';

const Head = () => {
    return (
        <>
            <Navbar variant="dark" className="nav fixed-top">
                <Container>
                    {/* <image src="" alt="logo"/> */}
                    <Navbar.Brand as={Link} to="/"><strong>Mental Well Being</strong></Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
                        <Nav.Link as={Link} to="/aboutus" className="nav-link">About us</Nav.Link>
                        <Nav.Link as={Link} to="/support" className="nav-link">Support</Nav.Link>
                        <Nav.Link as={Link} to="/login" className="nav-link">Login</Nav.Link>
                        <Nav.Link as={Link} to="/register" className="nav-link">Register</Nav.Link>
                        {/* <a><AvatarIcon class="avtar"></AvatarIcon></a> */}
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Head;

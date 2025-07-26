import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

interface BSNavbarProps {
    brand: string | null;
    navlinks: string[] | null;
}

export function BSNavbar({brand, navlinks}: BSNavbarProps) {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">{brand}</Navbar.Brand>
                <Nav className="me-auto">
                    {navlinks &&
                        navlinks.map((link, index) => (
                            <Nav.Link
                                key={index}
                                href={`#${link.toLowerCase()}`}>
                                {link}
                            </Nav.Link>
                        ))}
                </Nav>
            </Container>
        </Navbar>
    );
}

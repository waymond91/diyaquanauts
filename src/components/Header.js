import { Container, Row, Col, Navbar, Nav, Link } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar bg="light" expand="lg" className="navbar">
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          style={{ display: "flex", flexWrap: "nowrap" }}
        >
          <div>DIY</div>
          <div style={{ fontWeight: "bold", marginLeft: "0.0rem" }}>
            Aquanauts
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

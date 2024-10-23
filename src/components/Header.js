import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header()
{
    return(
        <div>
      <Navbar bg="success" data-bs-theme="dark" >
        <Container>
          <Navbar.Brand href="#home" className='text-white'>Furni.</Navbar.Brand>
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Shop">Shop</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Services">Services</Nav.Link>
            <Nav.Link href="/Blog">Blog</Nav.Link>
            <Nav.Link href="/Contact">Contact us</Nav.Link>
            <Nav.Link href="/User">User</Nav.Link>
            <Nav.Link href="/Cart">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </div>
    )
}

export default Header
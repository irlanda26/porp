import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../img/logo.png';
import '../css/Menu.css';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <>
      <center>
        <Navbar className="nav">
          <center>
        <Container className='navb'>
          <Navbar.Brand className='logo' as={Link} to="/">
            <img
              alt=""
              src={Logo}
              className="d-inline-block align-top logosi"
            />{' '}
            Muscle Up
          </Navbar.Brand>
        </Container>
        </center>
        <NavDropdown  id="basic-nav-dropdown">
              <NavDropdown.Item className="" as={Link} to="/agregar">Agregar Rutina</NavDropdown.Item>
              <NavDropdown.Item className="" as={Link} to="/admin">
                Admin
              </NavDropdown.Item>
          </NavDropdown>
      </Navbar>
      </center>
    </>
  );
}

export default Menu;
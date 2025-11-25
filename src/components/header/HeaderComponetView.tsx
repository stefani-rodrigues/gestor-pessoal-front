import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

export default function HeaderComponentView() {
  return (

    <Navbar  className="align-items-end justify-content-end px-3">
        <Nav>
          <NavDropdown 
            title={<i className="bi-person-circle fs-4" style={{color:"#4F378A"}} ></i>} 
            id="basic-nav-dropdown"
            align="end" 
          >
            <NavDropdown.Item as={Link} to="/usuario">
              Perfil
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="/auth/login" className="text-danger">
              Sair
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
    </Navbar>
  );
}

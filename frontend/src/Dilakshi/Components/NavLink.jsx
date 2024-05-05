import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import '../Styles/btnStyles.css'
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Images/logo.png'
import { useNavigate } from 'react-router-dom';
function NavLink() {

  const navigate = useNavigate()
  return (
    <Navbar style={{ backgroundColor: '#fe7412' }} expand="lg">
      <Container fluid style={{ marginLeft: '3%', marginRight: '3%' }}>
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="70px"
            height="70px"
            // style={{ border: '2px solid white', borderRadius: '90px' }}
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          /> 
          {/* Border logo */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" style={{ marginLeft: '10%' }}>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px', justifyContent: 'space-between', }}
            navbarScroll
          >
            <Nav.Link className='btnLink' href="#" >Profile</Nav.Link>
            {localStorage.getItem("userRole") === "user" && [
            <Nav.Link className='btnLink' href="#" >ContactUs</Nav.Link>,
            <Nav.Link className='btnLink' href="#" >PoojaIndians</Nav.Link>
            ]}
            
            {localStorage.getItem("userRole") === "admin" && 
              [
                
                
                <Nav.Link className='btnLink' href="#" >Menu Management</Nav.Link>,
                <Nav.Link className='btnLink' href="#" >Buffet Reservations</Nav.Link>,
                <Nav.Link className='btnLink' href="#" >Buffet Page Management</Nav.Link>,
                <Nav.Link className='btnLink' href="#" >Order Management</Nav.Link>,
                <Nav.Link className='btnLink' href="#" >Complain Management</Nav.Link>,
                <Nav.Link className='btnLink' href="#" >Financial Management</Nav.Link>,
                <Nav.Link className='btnLink' href="#" >Room Reservation Management</Nav.Link>,
                <Nav.Link className='btnLink' href="#" >Career Application Management</Nav.Link>, 
                <Nav.Link className='btnLink' href="#" >Vacancy Post Managament</Nav.Link>,
              ]
            }
          </Nav>
          <Form className="d-flex">
            {
              localStorage.getItem("token") ?
                <Button variant="outline-success"
                  onClick={(e) => {
                    localStorage.clear()
                    navigate("/Register")
                  }}
                >Logout</Button>
                : <Button href="/Login" variant="outline-success">Login</Button>
            }
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

}

export default NavLink;
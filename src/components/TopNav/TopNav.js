import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styled from 'styled-components';
function TopNav() {
  return (
    <>
      {[false].map(expand => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Logo as={Link} to="/">
              <img src="/images/logo1.PNG" />
            </Logo>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  안녕하세요 ?
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  {/* <Nav.Link href="/">홈</Nav.Link> */}
                  <Nav.Link href="/login">로그인</Nav.Link>
                  <Nav.Link href="/signup">회원가입</Nav.Link>
                  <Nav.Link href="/host">호스트 모드</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default TopNav;

const Logo = styled.div`
  img {
    width: 200px;
  }
`;

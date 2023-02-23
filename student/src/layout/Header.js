import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#" onClick={() => navigate("/")}>
            Student
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#"  onClick={() => navigate("/")}>
              หน้าแรก
            </Nav.Link>
            <Nav.Link href="#" onClick={() => navigate("/student")}>
              ข้อมูลนักศึกษา
            </Nav.Link>
            <Nav.Link href="#" onClick={() => navigate("/")}>
              ข้อมูลการจอง
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#" onClick={() => navigate('/login')}>เข้าสู่ระบบ</Nav.Link>
            <Nav.Link href="#" onClick={() => navigate('/register')}>ลงทะเบียน</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;

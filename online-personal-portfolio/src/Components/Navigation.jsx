import React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import "./Navigation.css";

class Navigation extends React.Component{

    constructor(props){
        super(props)
    }

    

    render(){
        return(
            <>
            <Navbar>
                <Container>
                    <Navbar.Brand className="footer" href="/">Home</Navbar.Brand>
                    <Nav variant="underline" defaultActiveKey="/">
                        <Nav.Item className="footer">
                            <Nav.Link href="/contact">Contact Me</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="footer">
                            <Nav.Link href="/about">About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="footer"> 
                            <Nav.Link href="/resume">Resume</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>
            </>
        )
    }
}

export default Navigation
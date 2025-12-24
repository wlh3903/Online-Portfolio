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
                    <Navbar.Brand className="footer" href="home">Home</Navbar.Brand>
                    <Nav defaultActiveKey="/home">
                        <Nav.Item className="footer">
                            <Nav.Link href="/home">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="footer">
                            <Nav.Link href="/about">About</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>
            </>
        )
    }
}

export default Navigation
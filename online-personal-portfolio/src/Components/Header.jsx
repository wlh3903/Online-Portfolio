import React from "react";
import "./Header.css"
import { Container, Row } from "react-bootstrap";

class Header extends React.Component{
    render(){
        return(
            <Container fluid className="body" >
                <Row className="title" as="h1">
                    Hello! I am Warner Harper
                </Row>
                <Row as="p">
                    I am a second year Software Engineering major at Rochester Institute of Technology.<br />
                    The images below will redirect you to my top 3 projects I have completed, as well as what I contriubtued to make them successful.
                </Row>
            </Container>
        )
    }
}

export default Header
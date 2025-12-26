import React from "react";
import { Button, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import './Projects.css'

class Projects extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Container>
                <Row>
                    <Col className="col1">
                        Col 1
                    </Col>
                    <Col className="col2">
                        Col 2
                    </Col>
                    <Col className="col3">
                        Col 3
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Projects
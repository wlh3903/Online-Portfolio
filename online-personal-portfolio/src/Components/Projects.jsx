import React from "react";
import { Button, Col, Container, Image, Nav, Navbar, Row } from "react-bootstrap";
import './Projects.css'

const NUTRIKITPNG = "../src/assets/Nutrikit.png"
const ARMADAPNG = "../src/assets/Armada.png"
const SPORTCONNECTPNG = "../src/assets/SportConnect.png"

class Projects extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Container className="shift">
                <Row className="above-space">
                    <Col md="auto" >
                        <Image src={NUTRIKITPNG} alt="NutriKit Screenshot" rounded width="400"/>
                    </Col>
                    <Col as="h2" className="image-title-left">
                        NutriKit Food Planner (Solo Project)
                    </Col>
                </Row>
                <Row className="above-space">
                    <Col as="h2" className="image-title-right">
                        SportConnect (Team Project)
                    </Col>
                    <Col md="auto">
                        <Image src={SPORTCONNECTPNG} alt="SportConnect Helper in Screenshot" rounded width="400" />
                    </Col>
                </Row>
                <Row className="above-space">
                    <Col md="auto">
                        <Image src={ARMADAPNG} alt="Armada screenshot" rounded width="400" />
                    </Col>
                    <Col as="h2" className="image-title-left">
                        Armada (Team Project)
                    </Col> 
                    
                </Row>
            </Container>
        )
    }
}
export default Projects
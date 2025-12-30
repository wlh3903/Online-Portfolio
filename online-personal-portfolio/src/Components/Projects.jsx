import React from "react";
import './Projects.css'
import { Col, Container, Image, Row } from "react-bootstrap";

const NUTRIKITPNG = "/NutriKit.png"
const ARMADAPNG = "/Armada.png"
const SPORTCONNECTPNG = "/SportConnect.png"

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
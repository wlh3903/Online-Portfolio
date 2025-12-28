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
            <Container>
                <Row>
                    <Col>
                        <Image src={NUTRIKITPNG} alt="NutriKit Screenshot" rounded width="400"/>
                    </Col>
                    <Col>
                        <p>img_1 words</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>img_2 words</p>
                    </Col>
                    <Col>
                        <Image src={SPORTCONNECTPNG} alt="SportConnect Helper in Screenshot" rounded width="400" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Image src={ARMADAPNG} alt="Armada screenshot" rounded width="400" />
                    </Col>
                    <Col>
                        <p>img_3 words</p>
                    </Col> 
                    
                </Row>
            </Container>
        )
    }
}
export default Projects
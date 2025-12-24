import React from "react";
import Navigation from "../Components/Navigation";
import { Container, Row } from "react-bootstrap";

class Contact extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            active: "contact"
        }
    }

    render(){
        return(
            <Container>
                <Row className="nav">
                    <Navigation active={this.state.active}></Navigation>
                </Row>
            </Container>
        )
    }
}

export default Contact
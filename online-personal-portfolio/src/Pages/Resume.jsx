import React from "react";
import Navigation from "../Components/Navigation";
import { Container } from "react-bootstrap";

class Resume extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Container>
                <Navigation />
            </Container>
        )
    }
}

export default Resume
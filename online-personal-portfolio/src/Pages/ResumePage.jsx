import React from "react";
import { Container } from "react-bootstrap";
import Navigation from "../Components/Navigation";
import Resume from "../Components/Resume";

class ResumePage extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Container>
                <Navigation />
                <Resume />
            </Container>
        )
    }
}

export default ResumePage
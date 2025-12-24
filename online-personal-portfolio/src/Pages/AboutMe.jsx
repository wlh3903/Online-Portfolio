import React from "react";
import Navigation from "../Components/Navigation";
import { Container } from "react-bootstrap";

class AboutMe extends React.Component{
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

export default AboutMe
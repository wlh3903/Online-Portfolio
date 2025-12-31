import React from "react";
import AboutMe from "../Components/AboutMe";
import { Container } from "react-bootstrap";
import Navigation from "../Components/Navigation";

class About extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Container>
                <Navigation />
                <Container>
                    <AboutMe />
                </Container>
            </Container>
        )
    }
}

export default About
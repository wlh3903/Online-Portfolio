import React from "react";
import Navigation from "../Components/Navigation";
import { Container, Row } from "react-bootstrap";
import './AboutMe.css'
class AboutMe extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Container>
                <Navigation />
                <Container>
                    <Row className="para" as='p'>
                        Hi, I'm Warner Harper. I'm a second-year Software Engineering student at the Rochester Institute of Technology, enrolled in the Combined Accelerated Bachelor's/Master's Program. I expect to earn my Bachelor of Science in Software Engineering in Spring 2029 and my Master of Science in Cybersecurity in Spring 2030.
                    </Row>
                </Container>
            </Container>
        )
    }
}

export default AboutMe